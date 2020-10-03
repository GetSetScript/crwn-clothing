import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/signInAndSignUp/SignInAndSignUp';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact
                path='/signin' 
                render={() => 
                  this.props.currentUser ? 
                    (<Redirect to='/' /> )
                  : 
                    (<SignInAndSignUp />)                  
                } />
        </Switch>
      </div>
    );
  }  
}

const mapStateToProps = state => {
  return {
      currentUser: state.user.currentUser
  };
}

export default connect(mapStateToProps)(App);
