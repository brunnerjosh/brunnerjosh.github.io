import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import Landing from '../Components/Landing';

function mapStateToProps (state) {
  return { ...state };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    push
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
