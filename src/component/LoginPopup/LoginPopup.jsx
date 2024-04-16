import React from 'react';
import './LoginPopup.css';
import { useState } from 'react';
import Cancel from '../../assets/cancel.svg';
import FoodImg from '../../assets/chicken.svg';
import Logo from '../../assets/Logo.svg';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Login');
  return (
    <div className="login-popup">
      <div className="left-section">
        <img className="signup-logo" src={Logo} alt="" />
        <img src={FoodImg} alt="" />
      </div>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={Cancel} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === 'Login' ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="user@gmail.com" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === 'Login' ? (
          <p>
            Create a new account?{' '}
            <span onClick={() => setCurrState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
