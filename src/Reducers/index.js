import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import medium from './medium';

export default combineReducers({
  medium,
  routing: routerReducer
});
