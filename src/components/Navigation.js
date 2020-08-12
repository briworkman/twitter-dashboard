import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <Link to={'/'}>
        <img src={logo} alt='logo' className='logo' />
      </Link>
      <Link to={'/movies/search'}>
        <p>search</p>
      </Link>
    </div>
  );
}

export default Navigation;
