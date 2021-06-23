import React, { Fragment, useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos'
import Button from 'react-bootstrap/Button'
import './Info.css'

function Contact() {
    useEffect(()=> {
        Aos.init({duration: 2000});
    }, [])
    return (
        <Fragment>
            <section id="4" className="info">
                <div className=" py-5 bg-image">
                    <p>Do you have a <strong className="strong" data-aos="fade-right">web platform project?</strong> </p>
                    <p>Do not hesitate any longer and contact me !</p>
                    <div className="btn">
                        <Button href='/#6' variant="outline-light">CONTACT</Button>
                        {/* <Button variant="outline-light">MY PROJECTS</Button> */}
                    </div>
                </div>
            </section>
        </Fragment>


    );
}

export default Contact;