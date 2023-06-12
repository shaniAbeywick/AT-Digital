import React,{useState} from 'react'
import '../styles/Navbar.css';
import Logo from '../assets/White Logo.png'
import {NavLink} from "react-router-dom";





function Navbar() {
  const [click,setClick]= useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav className='navbar'>
        <div className='nav-container'>
          <NavLink exact to ="/" className='nav-logo'>
              <img src={Logo} alt="Logo" />
          </NavLink>
          <ul className={click ? 'nav-menu .active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink exact to="/Services" className='nav-links' onClick={handleClick}>
                 SERVICES
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact to="/About us" className='nav-links' onClick={handleClick}>
                 ABOUT US
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact to="/Contact us" className='nav-links' onClick={handleClick}>
                CONTACT US
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact to="/Careers" className='nav-links' onClick={handleClick}>
                CAREERS
              </NavLink>
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>

          <i className={click ? "fas fa-times":"fas fa-bars" }>
          
          </i>

          </div>
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar;


