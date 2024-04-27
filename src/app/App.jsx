import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Navbar from '../component/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Menu from '../pages/Menu';
import LoginPopup from '../component/LoginPopup/LoginPopup';
import Footer from '../component/Footer/Footer';
import './App.css';

import Checkout from '../pages/Checkout.jsx';

// function App() {
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="login" element={<LoginPopup />} /> */}
          {/* <Route path="signup" element={<Signup />} /> */}
          <Route path="menu" element={<Menu />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
