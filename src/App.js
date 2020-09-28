import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/signInAndSignUp/SignInAndSignUp';
import userRepository from './repositories/user/userRepository';

import './App.scss';

class App extends React.Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    userRepository.event.addEventListener('getUser', userData => {
      console.log('hit mount')
      this.setState({ currentUser: userData}, () => console.log(this.state.currentUser));
    });
  }

  componentWillUnmount() {
    userRepository.event.addEventListener('getUser', userData => {
      this.setState({ currentUser: userData}, () => console.log(this.state.currentUser));
    });
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }  
}

export default App;
