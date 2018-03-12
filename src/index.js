import React from 'react';
import {render} from 'react-dom';
//import {BrowserRouter, Route, Link} from 'react-router-dom';

import './css/style.css'
//import App from './components/App';
import Router from "./components/Router"
//import NotFound from './components/NotFound';
//import StorePicker from './components/StorePicker';

const Root = () => {
  return (
    <Router />
  )
}

render(<Root />, document.querySelector('#main'));
