import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown.jsx';
import { BiLogInCircle } from 'react-icons/bi'
import { BiUserCircle } from 'react-icons/bi';
import Button from './Button';
import NavDrawer from './NavDrawer';

import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';

import Register from './Register';
import Login from './Login';
import { useSelector } from 'react-redux';
import AccountMenu from './Menu'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '45vw',
    height: '80vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline: 'none',
    zIndex: "10000",
    p: 4,
    fontSize: '5px',
    overflowY: 'auto'
};

function Navbar() {

    const email = useSelector((state: RootState) => state.auth.email)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {setOpen(false); setOpenLogin(true)}
    const [openLogin, setOpenLogin] = useState(true);
    const [dropdown, setDropdown] = useState(false);

    const [isMobile, setMobile] = useState(window.innerWidth > 1450);

    const updateScreen = () => {
      setMobile(window.innerWidth < 960);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateScreen);
      return () => window.removeEventListener("resize", updateScreen);
    });


    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(true);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(true);
        } else {
            setDropdown(false);
        }
    };


    const [scrolled, setScrolled] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 40) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    window.addEventListener('scroll', changeNavbarColor);


    return (
        <>

            {/* auth modal */}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            
            >
                <Box sx={style}>
                    {openLogin ? <Login changeState={openLogin => setOpenLogin(openLogin)}/> : <Register changeState={openLogin => setOpenLogin(openLogin)}/>}
                </Box>

            </Modal>



            <nav className={scrolled ? "navbar navbar-color" : "navbar"}>
                <Link to='/' className='navbar-logo'>
                    EPIC
                    <i class='fab fa-firstdraft' />
                </Link>
                {/* <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} >Click</i>
                </div> */}
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            Home
                        </Link>
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to='/'
                            className='nav-links'
                        >
                            Categories <i className='fa fa-angle-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/products'
                            className='nav-links'
                        >
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/contact-us'
                            className='nav-links'
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>
                <Button />
                {email ? 
                <AccountMenu className='nav-icons'/>
                :
                <BiLogInCircle onClick={handleOpen} className='nav-icons' />
                }
                {isMobile && <NavDrawer className='nav-icons' />}

            </nav>
        </>
    );
}



export default Navbar;