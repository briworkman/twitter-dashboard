import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import logo from './assets/logo.svg';
import Data from './components/Data';
import MovieInfo from './components/MovieInfo';

function App() {
  require('dotenv').config();
  return (
    <div className='App'>
      <img src={logo} alt='logo' />
      <Switch>
        <Route exact path='/' component={Data} />
        <Route exact path='/movie/:id' component={MovieInfo} />
      </Switch>
    </div>
  );
}

export default App;
