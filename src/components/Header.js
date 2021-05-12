import React from 'react'
import './Header.css'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"



function Header() {
    return (
        <Router>        
            <div className='header'>
                <ul className='link linkAnimate animate__animated animate__pulse animate__repeat-3 animate__delay-5s'>
                    <a href="/#1">ABOUT</a>
                    <a href="/#2">SERVICES </a>
                    <a href="/#3">SKILL</a>
                    <a href="/#3">CONTACT</a>
                </ul>
            </div>
        </Router>
        

       
    )
}

export default Header
