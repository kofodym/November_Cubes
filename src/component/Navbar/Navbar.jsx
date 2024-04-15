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
          Home
        </li>
        <li
          onClick={() => setMenu('about-us')}
          className={menu === 'about-us' ? 'active' : ''}
        >
          About Us
        </li>
        <li
          onClick={() => setMenu('gallery')}
          className={menu === 'gallery' ? 'active' : ''}
        >
          Gallery
        </li>
        <li
          onClick={() => setMenu('contact-us')}
          className={menu === 'contact-us' ? 'active' : ''}
        >
          Contact Us
        </li>
        <li>
          <button className="login" onClick={() => setShowLogin(true)}>
            Login
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
