import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import medium from './medium';
import flickr from './flickr';
import webrtc from './webrtc';

export default combineReducers({
  medium,
  flickr,
  webrtc,
  routing: routerReducer
});
