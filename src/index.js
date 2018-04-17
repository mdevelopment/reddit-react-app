import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import App from './components/app';
import {
  createBrowserHistory,

  createMemoryHistory
} from 'history';

const browserHistory = createBrowserHistory();


ReactDOM.render(

  <BrowserRouter basename="/reddit_reactJS_app">
      <App/>
  </BrowserRouter>
  ,
  document.getElementById('container')
);
