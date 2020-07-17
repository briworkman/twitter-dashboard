import React from 'react';
import './App.css';
import Data from './components/Data';

function App() {
  require('dotenv').config();
  return (
    <div className='App'>
      <h1> Hello Twitter :)</h1>
      <Data />
    </div>
  );
}

export default App;
