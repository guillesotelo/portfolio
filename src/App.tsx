import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import './scss/app.scss'
import Header from './components/Header/Header';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Clients from './pages/Clients/Clients';

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
      <Route exact path='/clients'>
        <Header />
        <Clients />
      </Route>
      <Route>
        <Header />
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
