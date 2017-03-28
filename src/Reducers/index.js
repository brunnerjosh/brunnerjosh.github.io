import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import medium from './medium';
import flickr from './flickr';

export default combineReducers({
  medium,
  flickr,
  routing: routerReducer
});
