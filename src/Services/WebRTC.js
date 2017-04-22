import WebRTCAdapter from 'webrtc-adapter';
import PeerConnections from './PeerConnections';

let peers = new PeerConnections();

console.log('WebRTCAdapter', WebRTCAdapter);
export function initWebRTC () {
  return dispatch => {
    dispatch({ type: 'WEBRTC_INITIALIZING' });
    initSocketListeners()(dispatch);
    dispatch({ type: 'WEBRTC_INITIALED' });
  }
}

function initSocketListeners (userData) {
  return dispatch => {
    this.socket.on('exchange', (body) => {
      const data = formatSocketResponseData(body);
      onExchange(data)(dispatch);
    });
    this.socket.on('connect', () => {
      this.onConnect(userData)(dispatch);
    });
    this.socket.on('roster_update', (body) => {
      const roster = formatSocketResponseData(body);
      this.onRosterUpdate(roster)(dispatch);
    });
  };
}

function onExchange (data) {
  return dispatch => {
    onExchange (body) {
      return dispatch => {
        const data = body[0];
        const fromId = data.from;
        const pcPeers = this.getPeers();
        let pc = pcPeers.get(fromId);

        if (pc === undefined) {
          /*
          * If we've received an exchange and do not have the peer connected already
          * in place, this means that we are receiving a call from someone else.
          */
          pc = createPeerConnection(fromId, false)(dispatch);
        }

        const offer = data.sdp;

        // If the data exchange is an offer to connect (incoming call), answer it.
        if (offer) {
          const sessionDescription = new RTCSessionDescription(offer);
          pc.setRemoteDescription(sessionDescription, () => {
            if (pc.remoteDescription.type === 'offer') {
              dispatch({ type: 'PHONE_CALL_RECEIVING', from: fromId });
              dispatch({ type: 'OFFSCRENE_SCENE_SET', screen: 'phone' });
            } else {
              dispatch({ type: 'WEBRTC_ESTABLISHING_CALL' });
            }
          }, logError);
        } else {
          // Else, the "exchange" event was just part of the negotiation process
          const iceCandidate = new RTCIceCandidate(data.candidate);
          pc.addIceCandidate(iceCandidate);
          dispatch({ type: 'WEBRTC_ICE_NEGOTIATION', iceCandidate });
        }
      };
  }
}

function createPeerConnection () {

}
