import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import FirstComponent from './components/FirstComponent/FirstComponent';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={FirstComponent} /> 
  </Route>
);
