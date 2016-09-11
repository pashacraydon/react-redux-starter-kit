

import 'babel-polyfill';

// copy index.html to the build directory
require('file?name=[name].[ext]!../index.html');

import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from 'store';
import router from 'router';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);


