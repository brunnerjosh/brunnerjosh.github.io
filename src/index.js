import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route } from 'react-router';

import createStore from './Services/Store';

import './Styles/Reset.css';
import './Styles/index.css';

import App from './App';
import Landing from './Containers/Landing';
import About from './Containers/About';

const store = createStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path='/' component={Landing} />
        <Route path='/about' component={About} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
);
