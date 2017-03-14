import Flickr from 'node-flickr';

console.log('process.env.REACT_APP_FLICKR_KEY', process.env.REACT_APP_FLICKR_KEY);
const flickr = new Flickr({
  api_key: process.env.REACT_APP_FLICKR_KEY
});

export function fetchFlickrPhotos (opts) {
  return dispatch => {
    dispatch({ type: 'FETCHING_FLICKR' });
    flickr.get('people.getPublicPhotos', opts, (err, result) => {
      if (err) {
        dispatch({ type: 'FETCH_FLICKR_ERROR', err });
      } else {
        dispatch({ type: 'FETCH_FLICKR_SUCCESS', photos: result.photos });
      }
    })
  }
}
