import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dashboard'>
      <Link className='logo dashboard-logo' to='/'>
        SONISKA
      </Link>
      <ul>
        <li>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='nav-link' to='/pricing'>
            Pricing
          </Link>
        </li>
        <li>
          <Link className='nav-link' to='/login'>
            Log In
          </Link>
        </li>
        <li className='sign-up'>
          <Link to='/register'>Sign Up</Link>
        </li>
        <li>
          <Link className='nav-link' to='/account'>
            <span>
              <i className='far fa-user-circle user-icon'></i>
            </span>
            Username
          </Link>
        </li>
        <li>
          <Link className='nav-link' to='/logout'>
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
