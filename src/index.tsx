import React from 'react';
import ReactDOM from 'react-dom';
import './styles';
import App from './App';
import * as serviceWorker from './serviceWorker';
import smoothscroll from 'smoothscroll-polyfill';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

// Smooth Scroll behavior polyfill
// https://github.com/iamdustan/smoothscroll
smoothscroll.polyfill();