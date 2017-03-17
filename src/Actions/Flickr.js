import '../../node_modules/flickrapi/browser/flickrapi.js';

const { Flickr } = window;

var flickr = new Flickr({
  endpoint: "/api/flickr"
});

export function fetchFlickrPhotos (opts) {
  return dispatch => {
    dispatch({ type: 'FETCHING_FLICKR', opts });
    flickr.people.getPublicPhotos(opts, (err, result) => {
      if (err) {
        dispatch({ type: 'FETCH_FLICKR_ERROR', err });
      } else {
        dispatch({ type: 'FETCH_FLICKR_SUCCESS', photos: result.photos })
      }
    });
  }
}
