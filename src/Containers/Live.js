import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findOpenChatRoom } from '../Actions/WebRTC';
import { closeWebRTC, loadLocalStream } from '../Services/WebRTC';
import Live from '../Components/Live';

function mapStateToProps (state) {
  return { ...state };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    closeWebRTC,
    loadLocalStream,
    findOpenChatRoom
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Live);
