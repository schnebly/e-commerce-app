import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInPage from './pages/signin/signinPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route component={HomePage} exact path='/' />
        <Route component={ShopPage} exact path='/shop' />
        <Route component={SignInPage} exact path='/signup' />
      </Switch>
    </div>
  );
}

export default App;
