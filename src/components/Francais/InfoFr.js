import React, { Fragment, useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos'
import Button from 'react-bootstrap/Button'
import './InfoFr.css'

function InfoFr() {
    useEffect(()=> {
        Aos.init({duration: 2000});
    }, [])
    return (
        <Fragment>
            <section id="4" className="info">
                <div className=" py-5 bg-image">
                    <p>Vous avez <strong className="strong" data-aos="fade-right">un projet web ? </strong> </p>
                    <p>N'hesitez plus et contactez moi</p>
                    <div className="btn">
                        <Button href='#5fr' variant="outline-light">CONTACT</Button>
                        {/* <Button variant="outline-light">MY PROJECTS</Button> */}
                    </div>
                </div>
            </section>
        </Fragment>


    );
}

export default InfoFr;