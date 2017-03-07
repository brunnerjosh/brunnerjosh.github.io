import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pages from '../Components/Pages';
import { fetchMediumFeed } from '../Actions/Medium';
import { fetchFlickrPhotos } from '../Actions/Flickr';

function mapStateToProps (state) {
  return { ...state };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchMediumFeed,
    fetchFlickrPhotos
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages);
