import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pages from '../Components/Pages';

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
)(Pages);
