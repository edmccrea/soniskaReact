import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      console.log('Success');
    }
  };
  return (
    <div class='user-body signup-body'>
      <div class='user-container'>
        <div class='user-main-contents'>
          <h1 class='user-title'>Sign Up</h1>
          <form onSubmit={(e) => onSubmit(e)} class='user-form'>
            <input
              class='user-form-input'
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
            <input
              class='user-form-input'
              type='email'
              placeholder='Email'
              name='email'
              onChange={(e) => onChange(e)}
              value={email}
              required
            />
            <input
              class='user-form-input'
              type='password'
              placeholder='Password'
              name='password'
              minLength='6'
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
            <input
              class='user-form-input'
              type='password'
              placeholder='Retype Password'
              name='password2'
              minLength='6'
              value={password2}
              onChange={(e) => onChange(e)}
              required
            />
            <div class='t-c'>
              <input type='checkbox' class='t-c-checkbox' />
              <label for='checkbox' class='t-c-label'>
                I have read and agree to{' '}
                <Link to='/tac'>Terms &#38; Conditions</Link>
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
