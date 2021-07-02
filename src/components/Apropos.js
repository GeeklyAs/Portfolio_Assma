import React, { Fragment, useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos'
import './Apropos.css'

function Apropos() {
    useEffect(()=> {
        Aos.init({duration: 2000});
    }, [])
    return (
        <Fragment>
            <section id="1" className="about pt-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <h1 className="text-center">ABOUT</h1>
                            <p className="text-center" data-aos="zoom-in-up">Biography : </p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className=" textAbout col-md-12" data-aos="fade-up" data-aos-duration="1000">
                            <p>Straight out of my training as a Web developer at MolenGeek, I immediately hooked up with the Front-End.</p>      
                            <p>Having always had an artistic eye and passionate about code, the two make a perfect symbiosis to be able to bring you a website with a design and quality features.</p>     
                        </div>

                        <div className="imgLogo col-md-12" data-aos="fade-up" >
                            <img src="../img/geeklyweb.png" alt="geekly"/>
                        </div>
                    </div>
                </div>

            </section>
        </Fragment>
    );
}

export default Apropos;