import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../Reducers';

let middleware = [ thunk, routerMiddleware(browserHistory) ];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({ collapsed: true });
  middleware = [ ...middleware, logger ];
}

export default function () {
  return createStore(
    reducers,
    applyMiddleware(...middleware)
  );
}
