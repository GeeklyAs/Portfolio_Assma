import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
position: fixed;
background-color: black;
z-index: 1;
color: white;
width: 100%;
  height: 55px;
  // border-bottom: 2px solid #ca40ba;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
  .logoGeekly{
    height : 40px;
    // padding: 0%;
  }
  div.logo{
    padding: 1% 0% 0% 5%;
  }
  @media only screen and (min-width: 150px) and (max-width: 820px) {  
    /*Mobile View */
    div.logo{
      padding: 4% 0% 0% 5%;
    }
    @media only screen and (min-width: 750px) and (max-width: 1024px) {  
      /*Mobile View */
      div.logo{
        padding: 1% 0% 0% 5%;
      }
  
  
    }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      <img src="../img/geeklyLogo.PNG" className="logoGeekly" alt="LOGO"  />
      {/* <img src="../img/geeklyLogoPng.png" className="logoGeekly" alt="LOGO"  /> */}

      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
