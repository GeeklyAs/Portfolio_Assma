import React from 'react'
import Typist from 'react-typist'
import Typewriter from 'typewriter-effect'
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
                I'm Geekly
                <Typewriter
                  onInit={(Typewriter) => {
                      Typewriter
                      .typeString("Web developper")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Frontend developper")
                      .deleteAll()
                      .start()
                      .typeString("Web developper")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Frontend developper")
                      .deleteAll()
                      .start()
                      .typeString("Web developper")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Frontend developper")
                      .deleteAll()
                      .start()
                      .typeString("Web developper")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Frontend developper")
                      .deleteAll()
                      .start()

                  }}
                />

              </h2>
              <span  className="baliseh1">&lt;/h1&gt;</span>
            </Typist>
          </div>
          <Typist cursor={{show: false}}>
          <Typist.Delay ms={3800} />
            <span  className="balisebody">&lt;/body&gt;</span>
          </Typist>
        </div>
      </div>
      )
}

export default Banner
