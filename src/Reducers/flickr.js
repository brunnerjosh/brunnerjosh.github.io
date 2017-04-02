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
      newState.photos = {
        page: action.photos.page,
        pages: action.photos.pages,
        perpage: action.photos.perpage,
        photo: ! (newState.photos && newState.photos.photo) ? action.photos.photo : newState.photos.photo.concat(action.photos.photo),
        total: action.photos.total
      }
      break;
    default:
      return state;
  }

  return newState;
}
