const defaultState = {
  localStream: null,
  connections: {},
  streams: {}
}

export default function (state = defaultState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'WEBRTC_LOCAL_MEDIA_STREAM':
      newState.localStream = action.stream;
      break;
    case 'WEBRTC_NEW_PEER_CONNECTION':
      newState.connections[action.socketId] = action.pc;
      break;
    case 'WEBRTC_ADD_PEER_STREAM':
      newState.streams[action.socketId] = action.stream;
      break;
    case 'WEBRTC_SOCKET_LEAVE':
      delete newState.streams[action.socketId];
      delete newState.connections[action.socketId];
      break;
    default:
      return state;
  }

  return newState;
}
