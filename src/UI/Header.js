import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">Training Request Form</h1>
      <button className="primary-button" id="reg_btn" style={{ margin: '0 0 0 20px', float: 'right' }}><span>Log Out</span></button>
    </div>
  );
};

export default Header;
