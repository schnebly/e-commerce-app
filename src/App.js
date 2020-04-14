import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInPage from './pages/signin/signinPage';

import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route component={HomePage} exact path='/' />
          <Route component={ShopPage} exact path='/shop' />
          <Route component={SignInPage} exact path='/signup' />
        </Switch>
      </div>
    );
  }
  
}

export default App;
