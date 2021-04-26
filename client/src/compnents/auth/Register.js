import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div class='user-body signup-body'>
      <div class='user-container'>
        <div class='user-main-contents'>
          <h1 class='user-title'>Sign Up</h1>
          <form action='/signup' method='POST' class='user-form'>
            <input
              class='user-form-input'
              type='text'
              placeholder='Username'
              name='username'
              required
            />
            <input
              class='user-form-input'
              type='email'
              placeholder='Email'
              name='email'
              required
            />
            <input
              class='user-form-input'
              type='password'
              placeholder='Password'
              name='password'
              required
            />
            <div class='t-c'>
              <input type='checkbox' class='t-c-checkbox' />
              <label for='checkbox' class='t-c-label'>
                I have read and agree to <a href=''>Terms &#38; Conditions</a>
              </label>
            </div>
            <button class='user-btn'>CREATE ACCOUNT</button>
          </form>
          <p class='user-bottom-text'>
            Already have an account? <a href='/login'>Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
