import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import ScrollToTop from './components/extras/ScrollToTop';

import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop/>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
