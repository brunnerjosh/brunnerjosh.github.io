const defaultState = {
  roomId: null,
  localStream: null,
  connections: {},
  streams: {},
  socketId: null
}

export default function (state = defaultState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'WEBRTC_SET_ROOM_ID':
      newState.roomId = action.id
      break;
    case 'WEBRTC_LOCAL_MEDIA_STREAM':
      newState.localStream = action.stream;
      break;
    case 'WEBRTC_JOIN_SUCCESS':
      newState.socketId = action.socketId;
      break;
    case 'WEBRTC_CLOSED':
      newState.socketId = defaultState.socketId;
      newState.localStream = defaultState.localStream;
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
