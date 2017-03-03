const defaultState = {
  stories: null,
  isLoading: false,
  error: false
}

export default function (state = defaultState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'FETCHING_MEDIUM_STORIES':
      newState.isLoading = true;
      break;
    case 'FETCHED_MEDIUM_STORIES':
      newState.stories = action.data;
      newState.isLoading = false;
      break;
    case 'MEDIUM_STORIES_FETCH_ERROR':
      newState.error = true;
      newState.isLoading = false;
      break;
    default:
      return state;
  }

  return newState;
}
