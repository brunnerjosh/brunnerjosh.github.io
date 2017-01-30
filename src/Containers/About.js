import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import About from '../Components/About';

function mapStateToProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    // ...
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
