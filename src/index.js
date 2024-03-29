import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { storeTodo, storeCounter } from './store';

// import Root from './ReduxAvanzado/containers/Root';

const store = storeTodo || storeCounter // Esto se puede modificar ya que si en caso quieres ver Todo cambia a storeTodo sino storeCounter

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
