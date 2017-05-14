import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findOpenChatRoom } from '../Actions/WebRTC';
import {
  initWebRTC,
  closeWebRTC,
  loadLocalStream,
  checkForWebRTCSupport
} from '../Services/WebRTC';
import Live from '../Components/Live';

function mapStateToProps (state) {
  return { ...state };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    initWebRTC,
    closeWebRTC,
    loadLocalStream,
    findOpenChatRoom,
    checkForWebRTCSupport
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Live);
