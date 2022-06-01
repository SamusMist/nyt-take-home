import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import homeIcon from '../../home-icon.js';

const Header = () => {

  return (
    <div className='header'>
      <h1>Turing Times</h1>
      <Link to='/'>
        <img className='home-icon' src={homeIcon}>
      </Link>
    </div>
  )
}

export default Header;
