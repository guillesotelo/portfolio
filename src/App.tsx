import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import Home from './pages/Home/Home'
import './scss/app.scss'
import Header from './components/Header/Header';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Header />
        <Home />
      </Route>
      <Route exact path='/contact'>
        <Header />
        <Contact />
      </Route>
      <Route exact path='/about'>
        <Header />
        <About />
      </Route>
      <Route>
        <Header />
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
