export default class PeerConnections {
  constructor () {
    this.pcPeers = {};
  }

  set (socketId, peerConnection) {
    this.pcPeers[socketId] = peerConnection;
  }

  get (socketId) {
    return this.pcPeers[socketId];
  }

  close (socketId) {
    const pc = this.pcPeers[socketId];
    pc.close();
    delete this.pcPeers[socketId];
  }
}
