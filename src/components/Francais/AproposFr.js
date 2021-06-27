import React, { Fragment, useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos'
import './AproposFr.css'

function AproposFr() {
    useEffect(()=> {
        Aos.init({duration: 2000});
    }, [])
    return (
        <Fragment>
            <section id="1fr" className="about pt-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <h1 className="text-center">A PROPOS</h1>
                            <p className="text-center" data-aos="zoom-in-up">Biography : </p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className=" textAbout col-md-12" data-aos="fade-up" data-aos-duration="1000">
                            <p>Après ma formation de développeur Web chez MolenGeek, j'ai tout de suite accroché au Front-End.</p>                          
                            <p>Ayant toujours eu un oeil artistique et passionné par le code, les deux font une symbiose parfaite pour pouvoir vous apporter un site web avec un design et des fonctionnalités de qualité.</p>
                        </div>

                        <div className="imgLogo col-md-12" data-aos="fade-up" >
                            <img src="../img/geeklyLogoPng.PNG" alt="geekly"/>
                        </div>
                    </div>
                </div>

            </section>
        </Fragment>
    );
}

export default AproposFr;