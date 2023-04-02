import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {login} from "./login"

const root = ReactDOM.createRoot(document.getElementById('root'));
//ReactDOM.render({login}, document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //document.getElementById('root')
);