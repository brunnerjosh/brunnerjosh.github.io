import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import createStore from './Services/Store';

import './Styles/Reset.css';
import './Styles/index.css';

import App from './App';
import Landing from './Containers/Landing';
import Pages from './Containers/Pages';
import Typography from './Components/Typography';
import NotFound from './Components/NotFound';

const store = createStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Landing} />
        <Route path='about' component={Pages} />
        <Route path='professional' component={Pages} />
        <Route path='education' component={Pages} />
        <Route path='personal' component={Pages} />
        <Route path='thoughts' component={Pages} />
        <Route path='photography' component={Pages} />

        <Route path='articles/:articleId' component={Pages} />

        {/* HIDDEN ROUTES */}
        <Route path='typography' component={Typography} />

        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
);
