import React, { Fragment, useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos'
// import Button from 'react-bootstrap/Button'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
// import { FaFacebookSquare } from 'react-icons/fa';
// import { FaFacebookSquare } from 'react-icons/fa';

import './Reseau.css'

function Reseau() {
    useEffect(()=> {
        Aos.init({duration: 2000});
    }, [])
    return (
        <Fragment>
            <section className="reseau">
                <div className=" py-5 bg-image">
                    {/* <p>Do you have a <strong className="strong" data-aos="fade-right">web platform project?</strong> </p> */}
                    <p>You can also contact me on social networks ! </p>  
                     < FaFacebookSquare />      
                     < FaInstagram />      
                </div>
            </section>
        </Fragment>


    );
}

export default Reseau;