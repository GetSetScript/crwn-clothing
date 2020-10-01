import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/signInAndSignUp/SignInAndSignUp';
import { Authentication } from './services/user/authentication/authenticationProvider';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Authentication.AuthProvider>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUp} />
          </Switch>
        </div>        
      </Authentication.AuthProvider>
    );
  }  
}

export default App;
