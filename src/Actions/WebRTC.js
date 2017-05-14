import Api from '../Services/Api';
import { initWebRTC } from '../Services/WebRTC';

export function findOpenChatRoom () {
  return dispatch => {
    Api.get('api/room')
      .then( data => {
        initWebRTC(data.body.roomId)(dispatch);
      })
      .catch( err => {
        dispatch({ type: 'GET_CHAT_ROOM_ERROR' })
      })
  }
}
