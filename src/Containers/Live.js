import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Live from '../Components/Live';

function mapStateToProps (state) {
  return { ...state };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Live);
