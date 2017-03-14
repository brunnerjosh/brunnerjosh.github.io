const defaultState = {
  isLoading: false,
  photos: null,
}

export default function (state = defaultState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'FETCHING_FLICKR':
      newState.isLoading = true;
      break;
    case 'FETCH_FLICKR_ERROR':
      console.error('Flickr Error: ', action.err);
      newState.isLoading = false;
      break;
    case 'FETCH_FLICKR_SUCCESS':
      newState.isLoading = false;
      newState.photos = action.photos;
      break;
    default:
      return state;
  }

  return newState;
}
