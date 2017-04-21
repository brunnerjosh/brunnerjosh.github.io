import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initWebRTC } from '../Services/WebRTC';
import Live from '../Components/Live';

function mapStateToProps (state) {
  return { ...state };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    initWebRTC
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Live);
