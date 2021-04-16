import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "../pages/login/Login";
import Join from "../pages/join/Join";

export default () => (
  <Router>
    <Route path="/" exact={true} component={Login} />
    <Route path="/join" component={Join} />
  </Router>
)