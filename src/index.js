import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './i18n/config';

import App from './App';

import './index.css';

ReactDOM.render(
  <BrowserRouter> 
  <React.Suspense fallback="Loading...">
  <App />
  </React.Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);
