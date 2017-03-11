import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './Containers/App';
import Landing from './Containers/Landing';
import Pages from './Containers/Pages';
import Typography from './Components/Typography';
import NotFound from './Components/NotFound';

export default (
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
);
