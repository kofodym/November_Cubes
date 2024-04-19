import React, { useState } from 'react';
import LandingPage from '../pages/LandingPage';
import Navbar from '../component/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import './App.css';

import LoginPopup from '../component/LoginPopup/LoginPopup';

// function App() {
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
        <LandingPage />
      </div>
    </>
  );
};

export default App;
