import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  return (
    <div className='user-body login-body'>
      <div className='user-container'>
        <div className='user-main-contents'>
          <h1 className='user-title'>Log In</h1>
          <form action='/login' method='POST' className='user-form'>
            <input
              className='user-form-input'
              type='text'
              placeholder='Username'
              name='username'
              required
            />
            <input
              className='user-form-input'
              type='password'
              placeholder='Password'
              name='password'
              required
            />
            <button className='user-btn'>LOG IN</button>
          </form>
          <p className='user-bottom-text'>
            Don't have an account? <Link to='/signup'>Sign up here.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
