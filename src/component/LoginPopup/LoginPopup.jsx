//UPDATED ONE
// import React, { useState, useContext } from 'react';
// import './LoginPopup.css';
// import { StoreContext } from '../StoreContext/StoreContext';
// import Cancel from '../../assets/cancel.svg';
// import axios from 'axios';

// const LoginPopup = ({ setShowLogin }) => {
//   const { url, setToken } = useContext(StoreContext);
//   const [currState, setCurrState] = useState('Login');

//   const [data, setData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const onChangeHandler = event => {
//     const { name, value } = event.target;
//     setData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const onLogin = async event => {
//     event.preventDefault();
//     let newUrl = url;
//     if (currState === 'Login') {
//       newUrl += '/api/user/login';
//     } else {
//       newUrl += '/api/user/register';
//     }

//     try {
//       const response = await axios.post(newUrl, data);
//       if (response.data.success) {
//         setToken(response.data.token);
//         localStorage.setItem('token', response.data.token);
//         setShowLogin(false);
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         console.error(
//           'Server responded with error:',
//           error.response.status,
//           error.response.data
//         );
//         alert('Server responded with error. Please try again.');
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.error('No response received from server:', error.request);
//         alert(
//           'No response received from server. Please check your internet connection.'
//         );
//       } else {
//         // Something else happened in making the request
//         console.error('Error occurred during request setup:', error.message);
//         alert('An error occurred. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="login-popup">
//       <form onSubmit={onLogin} className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>{currState}</h2>
//           <img onClick={() => setShowLogin(false)} src={Cancel} alt="" />
//         </div>
//         <div className="login-popup-inputs">
//           {currState !== 'Login' && (
//             <input
//               name="name"
//               onChange={onChangeHandler}
//               value={data.name}
//               type="text"
//               placeholder="Your name"
//               required
//             />
//           )}

//           <input
//             name="email"
//             onChange={onChangeHandler}
//             value={data.email}
//             type="email"
//             placeholder="user@gmail.com"
//             required
//           />
//           <input
//             name="password"
//             onChange={onChangeHandler}
//             value={data.password}
//             type="password"
//             placeholder="password"
//             required
//           />
//         </div>
//         <button type="submit" className="login-popup-btn">
//           {currState === 'Sign Up' ? 'Create account' : 'Login'}
//         </button>
//         <div className="login-popup-condition">
//           <input type="checkbox" required />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>

//         {currState === 'Login' ? (
//           <p>
//             Create a new account?{' '}
//             <span onClick={() => setCurrState('Sign Up')}>Click here</span>
//           </p>
//         ) : (
//           <p>
//             Already have an account?
//             <span onClick={() => setCurrState('Login')}>Login here</span>
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default LoginPopup;

//2
// import React from 'react';
// import './LoginPopup.css';
// import { useState } from 'react';
// import Cancel from '../../assets/cancel.svg';

// const LoginPopup = ({ setShowLogin }) => {
//   const [currState, setCurrState] = useState('Login');

//   return (
//     <div className="login-popup">
//       <form className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>{currState}</h2>
//           <img onClick={() => setShowLogin(false)} src={Cancel} alt="" />
//         </div>
//         <div className="login-popup-inputs">
//           {currState === 'Login' ? (
//             <></>
//           ) : (
//             <input type="text" placeholder="Your name" required />
//           )}

//           <input type="email" placeholder="user@gmail.com" required />
//           <input type="password" placeholder="password" required />
//         </div>
//         <button className="login-popup-btn">
//           {currState === 'Sign Up' ? 'Create account' : 'Login'}
//         </button>
//         <div className="login-popup-condition">
//           <input type="checkbox" required />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>

//         {currState === 'Login' ? (
//           <p>
//             Create a new account?{' '}
//             <span onClick={() => setCurrState('Sign Up')}>Click here</span>
//           </p>
//         ) : (
//           <p>
//             Already have an account?
//             <span onClick={() => setCurrState('Login')}>Login here</span>
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default LoginPopup;

//3
import React, { useState } from 'react';
import './LoginPopup.css';
import Cancel from '../../assets/cancel.svg';

const LoginPopup = ({ setShowLogin, onLoginSuccess }) => {
  const [currState, setCurrState] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Add your login/signup logic here
    // Mock successful login/signup for demonstration
    const user = { email, name: currState === 'Sign Up' ? name : 'User' }; // mock user object
    onLoginSuccess(user);
    setShowLogin(false);
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={Cancel} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === 'Sign Up' && (
            <input
              type="text"
              placeholder="Your name"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="user@gmail.com"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className="login-popup-btn">
          {currState === 'Sign Up' ? 'Create account' : 'Login'}
        </button>
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
            Already have an account?{' '}
            <span onClick={() => setCurrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
