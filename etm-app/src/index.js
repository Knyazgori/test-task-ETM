import React from 'react';

import { Provider } from 'react-redux';
import { store } from './redux/store'

import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

