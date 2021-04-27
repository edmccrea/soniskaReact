import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../imgs/logo.png';

const Footer = () => {
  return (
    <footer class='footer'>
      <div class='links'>
        <div class='info-pages link-section'>
          <Link to='/faq' class='footer-text'>
            FAQ
          </Link>
          <Link to='/blog' class='footer-text'>
            Blog
          </Link>
        </div>
        <div class='policies link-section'>
          <Link to='/privacy' class='footer-text'>
            Privacy Policy
          </Link>
          <Link to='/tos' class='footer-text'>
            Terms of Service
          </Link>
        </div>
        <div class='socials'>
          <Link to='https://www.facebook.com/soniskastudio/' target='_blank'>
            <i class='fab fa-facebook-f footer-text'></i>
          </Link>
          <Link to='/spotify'>
            <i class='fab fa-spotify footer-text'></i>
          </Link>
          <Link to='/instagram'>
            <i class='fab fa-instagram footer-text'></i>
          </Link>
        </div>
      </div>
      <div class='footer-logo'>
        <img class='footer-img' src={logo} alt='soniska-logo' />
        <p class='footer-name'>SONISKA</p>
        <p class='footer-copyright'>
          &#169;Copyright 2021 Soniska AB. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
