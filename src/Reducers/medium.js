const defaultState = {
  stories: null
}

export default function (state = defaultState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'FETCHED_MEDIUM_STORIES':
      newState.stories = action.data;
      break;
    case 'MEDIUM_STORIES_FETCH_ERROR':
      console.log('Error retrieving Medium posts...')
      break;
    default:
      return state;
  }

  return newState;
}
