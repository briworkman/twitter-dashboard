import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import MovieData from './components/MovieData';
import MovieInfo from './components/MovieInfo';
import ActorInfo from './components/ActorInfo';

function App() {
  require('dotenv').config();
  return (
    <div className='App'>
      <Link to={'/'}>
        <img src={logo} alt='logo' className='logo' />
      </Link>
      <Switch>
        <Route exact path='/' component={MovieData} />
        <Route exact path='/movie/:id' component={MovieInfo} />
        <Route exact path='/actor/:id' component={ActorInfo} />
      </Switch>
    </div>
  );
}

export default App;
