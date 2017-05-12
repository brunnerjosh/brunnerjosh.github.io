import uuid from 'uuid';
import io from 'socket.io-client';
import publicIp from 'public-ip';
import WebRTCAdapter from 'webrtc-adapter';
import PeerConnections from './PeerConnections';
const supportedBrowsers = {
  'chrome': 49,
  'firefox': 52
}
// Store the IP address of the current user
let ipAddress;
publicIp.v4().then( ip => ipAddress = ip );

/* INITIALIZE BROWSER SHIMS */
for (var key in WebRTCAdapter.browserShim) {
  if (WebRTCAdapter.browserShim.hasOwnProperty(key)) {
    WebRTCAdapter.browserShim[key]();
  }
}

let socket;
let peers = new PeerConnections();
var configuration = {"iceServers": [{"urls": "stun:stun.l.google.com:19302"}]};
var localStream;

export function checkForWebRTCSupport () {
  return dispatch => {
    const browser =  WebRTCAdapter.browserDetails.browser
    const isSupported = supportedBrowsers[browser];
    dispatch({ type: 'WEBRTC_SUPPORT', isSupported });
  };
}

export function initWebRTC (roomId) {
  return dispatch => {
    dispatch({ type: 'WEBRTC_SET_ROOM_ID', roomId });
    initSocketListeners({
      roomId,
      ipAddress,
      name: 'uuid_' + uuid.v4()
    }, '/')(dispatch);
    dispatch({ type: 'WEBRTC_INITIALED' });
  }
}

export function closeWebRTC () {
  return dispatch => {
    if (socket) socket.close();
    if (localStream) {
      localStream.getAudioTracks()[0].stop();
      localStream.getVideoTracks()[0].stop();
      localStream = null;
    }
    dispatch({ type: 'WEBRTC_CLOSED' });
  }
}

function initSocketListeners (userData, server) {
  return dispatch => {
    socket = io(server);
    socket.on('exchange', (data) => {
      onExchange(data)(dispatch);
    });
    socket.on('connect', () => {
      onConnect(userData)(dispatch);
    });
    socket.on('leave', socketId => {
      onLeave(socketId)(dispatch);
    })
    socket.on('join', peer => {
      createPeerConnection(peer.socketId, true)(dispatch)
    })
  };
}

function onLeave (socketId) {
  return dispatch => {
    if (peers.get(socketId)) {
      peers.close(socketId);
      dispatch({ type: 'WEBRTC_SOCKET_LEAVE', socketId });
    }
  }
}

export function loadLocalStream (success) {
  return dispatch => {
    getLocalStream({
      audio: true,
      video: {
        width: { ideal: 1280 },
        height: { ideal: 720 }
      }
    }, stream => {
      localStream = stream;
      dispatch({ type: 'WEBRTC_LOCAL_MEDIA_STREAM', stream });
      if (typeof success === 'function') success();
    });
  }
}

function onConnect (userData) {
  return dispatch => {
    if ( ! localStream ) {
      loadLocalStream(() => {
        joinRoom(userData)(dispatch);
      })(dispatch);
    } else {
      joinRoom(userData)(dispatch);
    }
  }
}

function joinRoom (userData) {
  return dispatch => {
    socket.emit('join', userData, friends => {
      dispatch({ type: 'WEBRTC_JOIN_SUCCESS', socketId: socket.id })
      friends.forEach( friend => {
        createPeerConnection(friend.socketId, false)(dispatch)
      });
    });
  }
}

function onExchange (data) {
  return dispatch => {

    const fromId = data.from;
    let pc = peers.get(fromId);

    if (pc === undefined) pc = createPeerConnection(fromId, false)(dispatch);

    if (data.sdp) {
      // If the data exchange is an offer to connect (incoming call), answer it.
      pc.setRemoteDescription(new RTCSessionDescription(data.sdp), () => {
        // Auto answer calls that come in
        if (pc.remoteDescription.type === "offer") {
          pc.createAnswer( desc => {
            pc.setLocalDescription(desc, () => {
              socket.emit('exchange', {'to': fromId, 'sdp': pc.localDescription });
            }, logError);
          }, logError);
        }
      }, logError);
    } else {
      // Else, the "exchange" event was just part of the negotiation process
      const iceCandidate = new RTCIceCandidate(data.candidate);
      pc.addIceCandidate(iceCandidate);
    }
  };
}

function createPeerConnection (socketId, isOffer) {
  return dispatch => {

    var pc = new RTCPeerConnection(configuration);
    function createOffer() {
      pc.createOffer(desc => {
        pc.setLocalDescription(desc, () => {
          socket.emit('exchange', {'to': socketId, 'sdp': pc.localDescription });
        }, logError);
      }, logError);
    }

    pc.onicecandidate = event => {
      if (event.candidate) socket.emit('exchange', {'to': socketId, 'candidate': event.candidate });
    };

    pc.onnegotiationneeded = () => {
      if (isOffer) createOffer();
    }

    pc.oniceconnectionstatechange = event => {
      var iceConnectionState = event.target.iceConnectionState;
      if (iceConnectionState === 'disconnected' || iceConnectionState === 'closed') {
        onLeave(socketId)(dispatch);
      }
    };
    pc.onsignalingstatechange = event => { };
    pc.onaddstream = event => {
      dispatch({ type: 'WEBRTC_ADD_PEER_STREAM', socketId, stream: event.stream })
    };

    pc.addStream(localStream);

    peers.set(socketId, pc);
    dispatch({ type: 'WEBRTC_NEW_PEER_CONNECTION', socketId, pc })
    return pc;
  }
}

function getLocalStream (config, success) {
  navigator.mediaDevices
    .getUserMedia( config )
    .then( success )
    .catch ( logError )
}

function logError (errorMsg) {
  console.error(errorMsg);
}
