import React from 'react';
import './BackToMenu.css';
import BackToMenuIcon from '../../assets/Arrow_Left_MD.svg';
import { Link } from 'react-router-dom';

const BackToMenu = () => {
  return (
    <Link to="/menu">
      <div className="back-to-menu">
        <img src={BackToMenuIcon} alt="" />
        <p className="back-to-menu-text">Back to Menu List </p>
      </div>
    </Link>
  );
};

export default BackToMenu;
