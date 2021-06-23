import React from 'react'
import Typist from 'react-typist'
import Typewriter from 'typewriter-effect'
// import ScrollAnimation from 'react-animate-on-scroll';
// import Pulse from 'react-reveal/Fade'
// import Fade from 'react-reveal/Pulse'
// // import { Link, animateScroll as scroll } from "react-scroll";
// import { Link, animateScroll as Scroll } from 'react-animate-on-scroll'

import './Banner.css'


function Banner() {
    return (
      <div className="banner">
        <div className="bannerInfo">
          <Typist cursor={{show: false}}>
            <Typist.Delay ms={500} />
            <span className="balisebody">&lt;body&gt;</span>
          </Typist>
          <div className="description">

            <Typist cursor={{show: false}}>
            <Typist.Delay ms={1000} />
              <span className="baliseh1">&lt;h1&gt;</span>
              <h2 className="geekly">
                Hi, <br/>
                My name is Geekly
                <Typewriter 
                  onInit={(Typewriter) => {
                      Typewriter
                      .typeString("Web developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Frontend developer")
                      .deleteAll()
                      .start()
                      .typeString("Web developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Frontend developer")
                      .deleteAll()
                      .start()
                      .typeString("Web developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Frontend developer")
                      .deleteAll()
                      .start()
                      .typeString("Web developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Frontend developer")
                      .deleteAll()
                      .start()
                      .typeString("Web developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Frontend developer")
                      .deleteAll()
                  }}
                />

              </h2>
              <span  className="baliseh1">&lt;/h1&gt;</span>
            </Typist>
          </div>
          <Typist cursor={{show: false}}>
          <Typist.Delay ms={500} />
            <span  className="balisebody">&lt;/body&gt;</span>
          </Typist>
        </div>
        {/* <div class="scroll-indicator">
            <Pulse count={100}>
              <Link
                  activeClass="active"
                  to="about"
                  smooth={true}
                  offset={-50}
                  duration={1000} className="text-decoration-none text-light"
              >
              <span class="scroll-indicator__text">
                  <span>Scroll</span>
              </span>
              </Link>
            </Pulse>
            <span class="scroll-indicator__bar" ></span>
        </div> */}
      </div>
      )
}

export default Banner
