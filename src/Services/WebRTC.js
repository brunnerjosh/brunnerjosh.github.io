import WebRTCAdapter from 'webrtc-adapter';
import PeerConnections from './PeerConnections';
import socket from './Socket';

WebRTCAdapter.browserShim.shimPeerConnection();
WebRTCAdapter.browserShim.shimGetSendersWithDtmf();
WebRTCAdapter.browserShim.shimGetUserMedia();
WebRTCAdapter.browserShim.shimMediaStream();
WebRTCAdapter.browserShim.shimSourceObject();
WebRTCAdapter.browserShim.shimOnTrack();

let peers = new PeerConnections();
var configuration = {"iceServers": [{"url": "stun:stun.l.google.com:19302"}]};
var localStream;


export function initWebRTC () {
  return dispatch => {
    dispatch({ type: 'WEBRTC_INITIALIZING' });
    initSocketListeners()(dispatch);
    dispatch({ type: 'WEBRTC_INITIALED' });
  }
}

function initSocketListeners (userData) {
  return dispatch => {
    socket.on('exchange', (data) => {
      onExchange(data)(dispatch);
    });
    socket.on('connect', () => {
      onConnect(userData)(dispatch);
    });
    socket.on('leave', socketId => {
      onLeave(socketId)(dispatch);
    })
    socket.on('roster_update', (roster) => {
      dispatch({ type: 'WEBRTC_ROSTER_UPDATE', roster });
      // onRosterUpdate(roster)(dispatch);
    });
  };
}

function onLeave (socketId) {
  return dispatch => {
    peers.close(socketId);
    dispatch({ type: 'WEBRTC_SOCKET_LEAVE', socketId });
  }
}

function onConnect (userData) {
  return dispatch => {
    getLocalStream({
      'audio': true,
      'video': true
    })(dispatch);

    socket.emit('login', {
      username: 'uid111',
      password: 'uid111'
    })
    dispatch({ type: 'WEBRTC_CONNECTION_ESTABLISHED' })
  }
}

function onExchange (data) {
  return dispatch => {

    const fromId = data.from;
    let pc = peers.get(fromId);

    if (pc === undefined) {
      /*
      * If we've received an exchange and do not have the peer connected already
      * in place, this means that we are receiving a call from someone else.
      */
      pc = createPeerConnection(fromId, false)(dispatch);
    }

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

    pc.onicecandidate = function (event) {
      if (event.candidate) {
        socket.emit('exchange', {'to': socketId, 'candidate': event.candidate });
      }
    };

    function createOffer() {
      pc.createOffer(desc => {
        pc.setLocalDescription(desc, () => {
          socket.emit('exchange', {'to': socketId, 'sdp': pc.localDescription });
        }, logError);
      }, logError);
    }

    pc.onnegotiationneeded = () => {
      console.log('onnegotiationneeded');
      if (isOffer) createOffer();
    }

    pc.oniceconnectionstatechange = event => {
      var iceConnectionState = event.target.iceConnectionState;
      console.log('iceConnectionState', iceConnectionState);
    };
    pc.onsignalingstatechange = event => { console.log('onsignalingstatechange', event);};
    pc.onaddstream = event => {
      dispatch({ type: 'WEBRTC_ADD_PEER_STREAM', socketId, stream: event.stream })
    };
    pc.addStream(localStream);

    peers.set(socketId, pc);
    dispatch({ type: 'WEBRTC_NEW_PEER_CONNECTION', socketId, pc })
    return pc;
  }
}

function getLocalStream (config) {
  return dispatch => {
    navigator.getUserMedia(config, stream => {
      localStream = stream;
      dispatch({ type: 'WEBRTC_LOCAL_MEDIA_STREAM', stream });
    }, logError);
  }
}

function logError (errorMsg) {
  console.error(errorMsg);
}
