import React from 'react';
import cvPic from '../../../src/cvgrad.png'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return (
      <>
        <Nav>
          <NavLink to='/'>
            <img src={cvPic} style={{"height" : "80px", "width" : "auto"}} alt="Logo"/>
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/usa'>
              USA
            </NavLink>
            <NavLink to='/about'>
              About
            </NavLink>
            <NavLink to='/healthprofile'>
              Health Profile
            </NavLink>
            <NavLink to='/contact-us'>
              Contact Us
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/log-in'>Log In</NavBtnLink>
            <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };

export default Navbar;