import React from 'react';
import styled from 'styled-components';
import BurgerFr from './BurgerFr';

const Nav = styled.nav`
position: fixed;
background-color: black;
z-index: 1;
color: white;
width: 100%;
  height: 55px;
  // border-bottom: 2px solid #ca40ba;
  padding: 0px 5%;
  display: flex;
  justify-content: space-between;

  // .logo {
  //   padding: 15px 0;
  // }
  .logoGeekly{
    height : 40px;
    // padding: 0%;
  }

  #btnLang{
    color: white;
    font-weight: bold;
    background-color: #c16ff0;
    // border : white;
    text-decoration : none;
    list-style-type: none;
}
  div.logo{
    padding: 1% 0% 0% 0%;
  }
  .anglais{
    height : 20px;
    // padding: 0% 0% 0% %;
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

const NavbarFr = () => {
  return (
    <Nav>
      <div className="logo d-flex">
      <a href="fr"><img src="../img/geeklyLogo.PNG" className="logoGeekly" alt="LOGO" /></a>
          {/* <img src="../img/geeklyLogoPng.png" className="logoGeekly" alt="LOGO"  /> */}
          <div className="anglaisAll">
            <a href="/"><img src="../img/anglais.png" className="anglais" alt="belgique"  /></a>
        </div>
      </div>
      <BurgerFr />
    </Nav>
  )
}

export default NavbarFr
