import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import Home from './pages/Home/Home'
import './scss/app.scss'
import Header from './components/Header/Header';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Header />
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
