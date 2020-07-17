import React from 'react';
import './App.css';
import logo from './assets/logo.svg';
import Data from './components/Data';

function App() {
  require('dotenv').config();
  return (
    <div className='App'>
      <img src={logo} alt='logo' />
      <Data />
    </div>
  );
}

export default App;
