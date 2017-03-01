import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pages from '../Components/Pages';
import { fetchMediumFeed } from '../Actions/Medium';

function mapStateToProps (state) {
  return {
    medium: state.medium
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchMediumFeed
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages);
