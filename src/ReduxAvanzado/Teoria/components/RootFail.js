import React from 'react';
import { Router, Route } from 'react-router';
import App from '../../../App';
import { createBrowserHistory } from 'history'

const AdvanceRedux = () => (
    <Router history={createBrowserHistory}>
      <Route path="/redux/(:filter)" component={App} />
    </Router>
);

export default AdvanceRedux;