import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import createStore from './Services/Store';
import logPageView from './Services/GoogleAnalytics';

const store = createStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} onUpdate={logPageView}>
      {routes}
    </Router>
  </Provider>
  , document.getElementById('root')
);
