import mediumPosts from '../Assets/medium_posts.json'

export function fetchMediumFeed (userId) {
  return dispatch => {
    dispatch({ type: 'FETCHED_MEDIUM_STORIES', data: mediumPosts });
  }
}
