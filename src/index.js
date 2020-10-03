import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './services/redux/store';
import { Authentication } from './services/user/authentication/authenticationProvider';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Authentication/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
