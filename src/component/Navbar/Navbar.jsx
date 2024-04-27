import Logo from '../../assets/Logo.svg';
import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');

  return (
    <div className="navbar">
      <img src={Logo} alt="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu('home')}
          className={menu === 'home' ? 'active' : ''}
        >
          {' '}
          <a href="/#">Home</a>
        </li>
        <li
          onClick={() => setMenu('about-us')}
          className={menu === 'about-us' ? 'active' : ''}
        >
          <a href="/#about-services">About Us</a>
        </li>
        <li
          onClick={() => setMenu('gallery')}
          className={menu === 'gallery' ? 'active' : ''}
        >
          <a href="/#gallery">Gallery</a>
        </li>
        <li
          onClick={() => setMenu('contact-us')}
          className={menu === 'contact-us' ? 'active' : ''}
        >
          <a href="/#footer">Contact Us</a>
        </li>
        <li>
          <button className="login" onClick={() => setShowLogin(true)}>
            Sign Up
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
