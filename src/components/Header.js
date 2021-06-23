import React from 'react'
import './Header.css'
import "aos/dist/aos.css"

import {BrowserRouter as Router} from "react-router-dom"



function Header() {    
    return (
        <Router>        
            <div className='header'>
                <ul className='col-lg-6 col-md-12 col-sm-12   link linkAnimate animate__animated animate__pulse animate__repeat-3 animate__delay-5s' >
                    <a data-aos="fade-up-left" href="/#1">ABOUT</a>
                    <a data-aos="zoom-in-down" href="/#2">SERVICES </a>
                    <a data-aos="zoom-in-down" href="/#3">SKILL</a>
                    <a data-aos="zoom-in-down" href="/#4">PORTFOLIO</a>
                    <a data-aos="zoom-in-down" href="/#5">CONTACT</a>
                </ul>
            </div>
        </Router>
       
    )
}

export default Header
