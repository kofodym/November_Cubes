// import Logo from '../../assets/Logo.svg';
// import { useState } from 'react';
// import './Navbar.css';
// import React, { useContext } from 'react';
// import { StoreContext } from '../StoreContext/StoreContext';
// import UserIcon from '../../assets/user-solid.svg';
// import BagIcon from '../../assets/bag-shopping-solid.svg';
// import Logout from '../../assets/arrow-right-from-bracket-solid.svg';
// import { useNavigate } from 'react-router-dom';

// const Navbar = ({ setShowLogin }) => {
//   const [menu, setMenu] = useState('home');
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
//   const { token, setToken } = useContext(StoreContext);

//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem('token');
//     setToken('');
//     navigate('/');
//   };

//   return (
//     <div className="navbar">
//       <img src={Logo} alt="logo" className="logo" />
//       <div className="menu-icon" onClick={toggleMenu}>
//         ☰
//       </div>
//       <ul className={`navbar-menu ${showMenu ? 'show' : ''}`}>
//         {/* Navigation Items */}
//         <li
//           onClick={() => {
//             setMenu('home');
//             toggleMenu(); // Hide menu on item click
//           }}
//           className={menu === 'home' ? 'active' : ''}
//         >
//           <a href="/#">Home</a>
//         </li>
//         <li
//           onClick={() => {
//             setMenu('about-us');
//             toggleMenu(); // Hide menu on item click
//           }}
//           className={menu === 'about-us' ? 'active' : ''}
//         >
//           <a href="/#about-services">About Us</a>
//         </li>
//         <li
//           onClick={() => {
//             setMenu('gallery');
//             toggleMenu(); // Hide menu on item click
//           }}
//           className={menu === 'gallery' ? 'active' : ''}
//         >
//           <a href="/#gallery">Gallery</a>
//         </li>
//         <li
//           onClick={() => {
//             setMenu('contact-us');
//             toggleMenu(); // Hide menu on item click
//           }}
//           className={menu === 'contact-us' ? 'active' : ''}
//         >
//           <a href="/#footer">Contact Us</a>
//         </li>
//         {!token ? (
//           <li>
//             <button className="login" onClick={() => setShowLogin(true)}>
//               Sign Up
//             </button>
//           </li>
//         ) : (
//           <div className="navbar-profile">
//             <img src={UserIcon} alt="" />
//             <ul className="nav-profile-dropdown">
//               <li>
//                 <img src={BagIcon} alt="" />
//                 <p>Orders</p>
//               </li>
//               <hr />
//               <li onClick={logout}>
//                 <img src={Logout} alt="" />
//                 <p>Logout</p>
//               </li>
//             </ul>
//           </div>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

// import Logo from '../../assets/Logo.svg';
// import { useState, useContext } from 'react';
// import './Navbar.css';
// import React from 'react';
// import { StoreContext } from '../StoreContext/StoreContext';
// import UserIcon from '../../assets/user-solid.svg';
// import BagIcon from '../../assets/bag-shopping-solid.svg';
// import Logout from '../../assets/arrow-right-from-bracket-solid.svg';
// import { useNavigate } from 'react-router-dom';

// const Navbar = ({ setShowLogin }) => {
//   const [menu, setMenu] = useState('home');
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const { token, setToken } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem('token');
//     setToken('');
//     navigate('/');
//   };

//   return (
//     <div className="navbar">
//       <img src={Logo} alt="logo" className="logo" />
//       <div className="menu-icon" onClick={toggleMenu}>
//         ☰
//       </div>
//       <ul className={`navbar-menu ${showMenu ? 'show' : ''}`}>
//         {/* Navigation Items */}
//         <li
//           onClick={() => {
//             setMenu('home');
//             toggleMenu(); // Hide menu on item click
//           }}
//           className={menu === 'home' ? 'active' : ''}
//         >
//           <a href="/#">Home</a>
//         </li>
//         <li
//           onClick={() => {
//             setMenu('about-us');
//             toggleMenu(); // Hide menu on item click
//           }}
//           className={menu === 'about-us' ? 'active' : ''}
//         >
//           <a href="/#about-services">About Us</a>
//         </li>
//         <li
//           onClick={() => {
//             setMenu('gallery');
//             toggleMenu(); // Hide menu on item click
//           }}
//           className={menu === 'gallery' ? 'active' : ''}
//         >
//           <a href="/#gallery">Gallery</a>
//         </li>
//         <li
//           onClick={() => {
//             setMenu('contact-us');
//             toggleMenu(); // Hide menu on item click
//           }}
//           className={menu === 'contact-us' ? 'active' : ''}
//         >
//           <a href="/#footer">Contact Us</a>
//         </li>
//         {/* Conditionally render Signup/Logout button */}
//         {!token ? (
//           <li>
//             <button className="login" onClick={() => setShowLogin(true)}>
//               Sign Up
//             </button>
//           </li>
//         ) : (
//           <div className="navbar-profile">
//             <img src={UserIcon} alt="" />
//             <ul className="nav-profile-dropdown">
//               <li>
//                 <img src={BagIcon} alt="" />
//                 <p>Orders</p>
//               </li>
//               <hr />
//               <li onClick={logout}>
//                 <img src={Logout} alt="" />
//                 <p>Logout</p>
//               </li>
//             </ul>
//           </div>
//         )}
//       </ul>
//     </div>
//   );
// };
// export default Navbar;
// import Logo from '../../assets/Logo.svg';
// import { useState, useContext } from 'react';
// import './Navbar.css';
// import React from 'react';
// import { StoreContext } from '../StoreContext/StoreContext';
// import UserIcon from '../../assets/user-solid.svg';
// import BagIcon from '../../assets/bag-shopping-solid.svg';
// import Logout from '../../assets/arrow-right-from-bracket-solid.svg';
// import { useNavigate } from 'react-router-dom';

// const Navbar = ({ setShowLogin }) => {
//   const [menu, setMenu] = useState('home');
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const { token, setToken } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem('token');
//     setToken('');
//     navigate('/');
//   };

//   return (
//     <div className="navbar">
//       <img src={Logo} alt="logo" className="logo" />
//       <div
//         className="menu-icon"
//         onClick={toggleMenu}
//         role="button"
//         aria-expanded={showMenu}
//         aria-controls="navbar-menu"
//       >
//         ☰
//       </div>
//       <ul id="navbar-menu" className={`navbar-menu ${showMenu ? 'show' : ''}`}>
//         {/* Navigation Items */}
//         <li
//           onClick={() => {
//             setMenu('home');
//             toggleMenu(); // Hide menu on item click
//           }}
//           className={menu === 'home' ? 'active' : ''}
//         >
//           <a href="/#">Home</a>
//         </li>
//         <li
//           onClick={() => {
//             setMenu('about-us');
//             toggleMenu(); // Hide menu on item click
//           }}
//           className={menu === 'about-us' ? 'active' : ''}
//         >
//           <a href="/#about-services">About Us</a>
//         </li>
//         <li
//           onClick={() => {
//             setMenu('gallery');
//             toggleMenu(); // Hide menu on item click
//           }}
//           className={menu === 'gallery' ? 'active' : ''}
//         >
//           <a href="/#gallery">Gallery</a>
//         </li>
//         <li
//           onClick={() => {
//             setMenu('contact-us');
//             toggleMenu(); // Hide menu on item click
//           }}
//           className={menu === 'contact-us' ? 'active' : ''}
//         >
//           <a href="/#footer">Contact Us</a>
//         </li>
//         {/* Conditionally render Signup/Logout button */}
//         {!token ? (
//           <li>
//             <button className="login" onClick={() => setShowLogin(true)}>
//               Sign Up
//             </button>
//           </li>
//         ) : (
//           <li className="navbar-profile">
//             <img src={UserIcon} alt="User Icon" />
//             <ul className="nav-profile-dropdown">
//               <li>
//                 <img src={BagIcon} alt="Bag Icon" />
//                 <p>Orders</p>
//               </li>
//               <hr />
//               <li onClick={logout}>
//                 <img src={Logout} alt="Logout Icon" />
//                 <p>Logout</p>
//               </li>
//             </ul>
//           </li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

import Logo from '../../assets/Logo.svg';
import { useState, useContext } from 'react';
import './Navbar.css';
import React from 'react';
import { StoreContext } from '../StoreContext/StoreContext';
import UserIcon from '../../assets/user-solid.svg';
import BagIcon from '../../assets/bag-shopping-solid.svg';
import LogoutIcon from '../../assets/arrow-right-from-bracket-solid.svg'; // Import the logout icon
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const { token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

  return (
    <div className="navbar">
      <img src={Logo} alt="logo" className="logo" />
      <div
        className="menu-icon"
        onClick={toggleMenu}
        role="button"
        aria-expanded={showMenu}
        aria-controls="navbar-menu"
      >
        ☰
      </div>
      <ul id="navbar-menu" className={`navbar-menu ${showMenu ? 'show' : ''}`}>
        {/* Navigation Items */}
        <li
          onClick={() => {
            setMenu('home');
            toggleMenu(); // Hide menu on item click
          }}
          className={menu === 'home' ? 'active' : ''}
        >
          <a href="/#">Home</a>
        </li>
        <li
          onClick={() => {
            setMenu('about-us');
            toggleMenu(); // Hide menu on item click
          }}
          className={menu === 'about-us' ? 'active' : ''}
        >
          <a href="/#about-services">About Us</a>
        </li>
        <li
          onClick={() => {
            setMenu('gallery');
            toggleMenu(); // Hide menu on item click
          }}
          className={menu === 'gallery' ? 'active' : ''}
        >
          <a href="/#gallery">Gallery</a>
        </li>
        <li
          onClick={() => {
            setMenu('contact-us');
            toggleMenu(); // Hide menu on item click
          }}
          className={menu === 'contact-us' ? 'active' : ''}
        >
          <a href="/#footer">Contact Us</a>
        </li>
        {/* Conditionally render Signup or Logout button */}
        {!token ? (
          <li>
            <button className="login" onClick={() => setShowLogin(true)}>
              Sign Up
            </button>
          </li>
        ) : (
          <>
            <li className="navbar-profile">
              <img src={UserIcon} alt="User Icon" />
              <ul className="nav-profile-dropdown">
                <li>
                  <img src={BagIcon} alt="Bag Icon" />
                  <p>Orders</p>
                </li>
              </ul>
            </li>
            <li>
              <button className="logout" onClick={logout}>
                <img src={LogoutIcon} alt="Logout Icon" /> Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
