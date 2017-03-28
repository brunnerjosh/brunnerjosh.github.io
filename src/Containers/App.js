import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push, goBack } from 'react-router-redux';
import App from '../Components/App';

function mapStateToProps (state) {
  return { ...state };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    goBack,
    push
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
