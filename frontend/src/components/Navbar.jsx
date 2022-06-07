import React, { useState } from 'react';
import Button from './Button.jsx';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown.jsx';
import {BiLogInCircle} from 'react-icons/bi'
import { SignInButton } from './SignInButton.jsx';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };


  const [scrolled, setScrolled] = useState(false);
  const changeNavbarColor = () => {
    if(window.scrollY >= 40){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
  }

  window.addEventListener('scroll', changeNavbarColor);



  return (
    <>
      <nav className={scrolled ? "navbar navbar-color": "navbar"}>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          EPIC
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fa fa-angle-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {/* <BiLogInCircle className='login-button' /> */}
        <SignInButton className='login-button'/>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;