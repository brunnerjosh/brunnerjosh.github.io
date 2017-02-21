import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SlidePages from '../Components/SlidePages';

function mapStateToProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { withRef: true }
)(SlidePages);
