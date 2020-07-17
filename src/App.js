import React from 'react';
import './App.css';
import Popular from './components/Popular';

function App() {
  require('dotenv').config();
  return (
    <div className='App'>
      <h1> Hello Twitter :)</h1>
      <Popular />
    </div>
  );
}

export default App;
