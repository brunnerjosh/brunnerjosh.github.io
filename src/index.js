import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route } from 'react-router';

import createStore from './Services/Store';

import './Styles/Reset.css';
import './Styles/index.css';

import App from './App';
import Landing from './Containers/Landing';
import Pages from './Containers/Pages';

const store = createStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path='/' component={Landing} />
        <Route path='/about' component={Pages} />
        <Route path='/professional' component={Pages} />
        <Route path='/education' component={Pages} />
        <Route path='/personal' component={Pages} />
        <Route path='/thoughts' component={Pages} />
        <Route path='/hobbies' component={Pages} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
);
