import React, { useState } from 'react';
import './navbar.css';
import logo from '../../images/logo.png';
import {GiCancel, GiHamburgerMenu } from 'react-icons/gi';
const MobileNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {
        isMenuOpen ? (
          <div className='nav-popup'>
            <GiCancel size = {30} onClick = {toggleMenu} />
            <a className="nav-link" href="/workshops">Workshops</a>
            <a className="nav-link" href="/what-we-do">What We Do</a>
            <a className="nav-link" href="/about">About Us</a>
            <a className="nav-link" href="/showcase">Showcase</a>
            <a className="nav-link green-button" href="/sign-up">Sign Up</a>
          </div>
      ):  <nav className= 'mobile-navbar'>
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Company Logo" />
            </a>
          <button className="hamburger-menu-button" onClick={toggleMenu}>
            <GiHamburgerMenu size={30} />
          </button>
        </nav>
      }
     
    </>
    
  );
};

export default MobileNavbar;
