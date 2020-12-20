import React from 'react';
import { Link } from 'react-router-dom';

export default function NavContainer() {
  return (
    <div className='nav-container'>
      <div className='nav-left-side'>
        <div className='nav-link'>
          <Link to='/'>
            Home
        </Link>
        </div>
        <div className='nav-link'>
          <Link to='/about'>
            About
        </Link>
        </div>
        <div className='nav-link'>
          <Link to='/contact'>
            Contact
        </Link>
        </div>
      </div>
    </div>
  )
}
