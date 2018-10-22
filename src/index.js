import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import getStore from './store';
import { Provider } from 'react-redux';

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
