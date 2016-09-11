 
 /**
 * Handle url routes
 */

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import AppContainer from 'components/containers/AppContainer';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer} >
    </Route>
  </Router>
);