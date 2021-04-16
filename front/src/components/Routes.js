import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "../pages/login/Login";
import Id from "../pages/join/Id";
import Password from "../pages/join/Password";

export default () => (
  <Router>
    <Route path="/" exact={true} component={Login} />
    <Route path="/join" exact={true} component={Id} /> 
    <Route path="/join/password" component={Password} />
  </Router>
)