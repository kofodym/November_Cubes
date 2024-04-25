import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


import Menu from "../pages/Menu";
import LoginPopup from "../component/LoginPopup/LoginPopup";

import "./App.css";

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
          {/* <Route path="checkout" element={<Checkout />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
