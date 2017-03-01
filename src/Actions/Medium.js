import Feed from 'rss-to-json';

export function fetchMediumFeed (userId) {
  return dispatch => {
    console.log('userId', userId);
    dispatch({ type: 'FETCHING_MEDIUM_STORIES' });
    Feed.load(`https://medium.com/feed/@${userId}`, (err, rss) => {
      if (err) {
        dispatch({ type: 'MEDIUM_STORIES_FETCH_ERROR' });
      } else {
        dispatch({ type: 'FETCHED_MEDIUM_STORIES', data: rss });
      }
    });
  }
}
