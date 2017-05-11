const defaultState = {
  isSupported: false,
  roomId: null,
  localStream: null,
  connections: {},
  streams: {},
  socketId: null
}

export default function (state = defaultState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'WEBRTC_SUPPORT':
      newState.isSupported = action.isSupported;
      break;
    case 'WEBRTC_SET_ROOM_ID':
      newState.roomId = action.roomId
      break;
    case 'WEBRTC_LOCAL_MEDIA_STREAM':
      newState.localStream = action.stream;
      break;
    case 'WEBRTC_JOIN_SUCCESS':
      newState.socketId = action.socketId;
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
    case 'WEBRTC_CLOSED':
      return defaultState;
    default:
      return state;
  }

  return newState;
}
