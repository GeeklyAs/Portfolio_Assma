import React from 'react'
import './Developer.css'
import Typewriter from 'typewriter-effect'

function Developer() {
    return (
        <div className="developer">
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

                  }}
                />

        </div>
    )
}

export default Developer
