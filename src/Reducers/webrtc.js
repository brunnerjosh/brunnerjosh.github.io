const defaultState = {
  localStream: null,
  roster: {},
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
    case 'WEBRTC_ROSTER_UPDATE':
      newState.roster = action.roster;
      break;
    case 'WEBRTC_ADD_PEER_STREAM':
      newState.streams[action.socketId] = action.stream;
      break;
    default:
      return state;
  }

  return newState;
}
