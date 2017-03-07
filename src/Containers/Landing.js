import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Landing from '../Components/Landing';

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
)(Landing);
