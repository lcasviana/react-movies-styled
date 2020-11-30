import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import Store from './core/store/Store';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>
  , rootElement);
