import React, { useState } from 'react';

import LandingPage from '../pages/LandingPage';
import Navbar from '../component/Navbar/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import './App.css';

import LoginPopup from '../component/LoginPopup/LoginPopup';
import Checkout from '../pages/Checkout.jsx';

// function App() {
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

      <div className="App">
        <Navbar setShowLogin={setShowLogin} />

        <Checkout />

        <LandingPage />
      </div>
    </>
  );
};

export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import LandingPage from '../pages/LandingPage';
// import Navbar from '../components/Navbar/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import './App.css';
// import LoginPopup from '../components/LoginPopup/LoginPopup';
// import Checkout from '../pages/checkout/Checkout';

// const App = () => {
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <Router>
//       <div className="App">
//         <Navbar setShowLogin={setShowLogin} />

//         {/* Define routes within the Switch component */}
//         <Switch>
//           {/* Route for the Checkout page */}
//           <Route path="/checkout">
//             <Checkout />
//           </Route>

//           {/* Route for the LandingPage (default route) */}
//           <Route path="/" exact>
//             <LandingPage />
//           </Route>
//         </Switch>

//         {/* Conditional rendering of LoginPopup */}
//         {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
//       </div>
//     </Router>
//   );
// };

// export default App;
