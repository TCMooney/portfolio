import React from 'react';
import { Link } from 'react-router-dom';

export default function NavContainer() {
  return (
    <div className='nav-container'>
      <div className='nav-wrapper'>
        <div className='nav-left-side'>
          <Link className='nav-link' to='/'>
            Home
        </Link>
          <Link className='nav-link' to='/about'>
            About
        </Link>
          <Link className='nav-link' to='/contact'>
            Contact
        </Link>
        </div>
        <div className='nav-right-side'>
          Tom Mooney
      </div>
      </div>
      <div className='nav-separator' />
    </div>

  )
}
