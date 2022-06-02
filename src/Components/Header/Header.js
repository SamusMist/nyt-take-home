import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import homeIcon from '../../home-icon.js';

const Header = () => {

  return (
    <header>
      <div className='header'>
        <h1 className='title' >Turing Times</h1>
        <Link to='/'>
          <img className='home-icon' src={homeIcon}/>
        </Link>
      </div>
    </header>
  )
}

export default Header;
