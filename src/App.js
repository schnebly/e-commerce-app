import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';

function App() {
  return (
    <div>
      <Switch>
        <Route component={HomePage} exact path='/' />
      </Switch>
    </div>
  );
}

export default App;
