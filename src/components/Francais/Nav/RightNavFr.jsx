import React from 'react';
import styled from 'styled-components';
// import {Link} from "react-router-dom";
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'
// import ContenuFrancais from '../Francais/ContenuFrancais'
// import Contenu from '../Contenu'
// import Info from './Info'


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;
  color: white;

  li {
    padding: 0px 10px;
  };

  a{
    color: white;
    text-decoration: none;

  };

  // .aproposfr>a {
  //   padding-right: 10%;
  //   color:  blue;


  // }
  .link>a{
    text-decoration: none;
    position: relative;
    max-width: max-content;
    color: #ffffff;
    text-shadow: 4px 4px 2px #c16ff0;
    // margin-right: 3%;
    font-size: 20px;
}
  .link>a::before{
    content: "";
    position: absolute;
    bottom: -5px;
    background-color: #ffffff;
    width: 0px;
    height: 2px;
    transition: 0.80s;
  };
  li.link>a:hover::before{
    width: 100%;
  }
  // .aproposFr{
  //   padding-left: 7%;
  // }


  @media (max-width: 768px) {
    
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #c16ff0;
      text-align: center;
      padding: 30px 0px;
      font-size : 30px;

    }

    // ul{
    //   padding: 0%;
    // }
  
  }
  @media (max-width: 1024px) {
    
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #c16ff0;
      text-align: center;
      padding: 50px 0px;
      font-size : 30px;

    }

    // ul{
    //   padding: 0%;
    // }
  
  }
`;



const RightNavFr = ({ open }) => {
  return (

    <Ul className=" p-0 pt-3" open={open}>
      <li className="link aproposFr">
        <a data-aos="fade-up-left" href="#1fr">A PROPOS</a>
      </li>
      <li className="link">
        <a data-aos="zoom-in-down" href="#2fr">SERVICES </a>
      </li>
      <li className="link">
        <a data-aos="zoom-in-down" href="#3fr">COMPETENCE</a>
      </li>
      <li className="link">
        <a data-aos="zoom-in-down" href="#4fr">PORTFOLIO</a>
      </li>
      <li className="link">
        <a data-aos="zoom-in-down" href="#5fr">CONTACT</a>
      </li>

    </Ul>
  )
}

export default RightNavFr
