import React from 'react';
import { RiMenu3Line, RiCloseLin, } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css';

export const Navbar = () => {
  return (
    // Using BEM to style navbar (Block Element Modifier)
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo' >
          <img src={logo} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Navbar