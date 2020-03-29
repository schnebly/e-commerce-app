import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route component={HomePage} exact path='/' />
        <Route component={ShopPage} exact path='/shop' />
      </Switch>
    </div>
  );
}

export default App;
