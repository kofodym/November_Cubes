import React from 'react';
import './LoginPopup.css';
import { useState } from 'react';
import Cross from '../../assets/close_24px.svg';

const LoginPopup = ({ setShowLogin }) => {
  const [currState /*setCurrState*/] = useState('Sign Up');
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={Cross} alt="" />
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
