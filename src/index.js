import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './store/index';
import addArticle from './actions/index';
import App from './components/App';

window.store = store;
window.addArticle = addArticle;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
