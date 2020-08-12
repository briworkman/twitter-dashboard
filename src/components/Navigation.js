import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Link to={'/'}>
          <img src={logo} alt='logo' className='logo' />
        </Link>
      </div>
      <div className='nav-links'>
        <Link to={'/'} className='link'>
          <p>HOME</p>
        </Link>
        <Link to={'/movies/search'} className='link'>
          <p>SEARCH</p>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
