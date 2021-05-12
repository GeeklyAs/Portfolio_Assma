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
            <section id="about" className="about">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">ABOUT</h1>
                            <p className="text-center">Biography : </p>
                        </div>
                    </div>
                    <div className="row  p-4">
                        <div className="  col-md-6" data-aos="fade-up" data-aos-duration="1000">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, consequuntur alias similique eveniet nam, ex eum suscipit eius illo aliquam placeat autem accusamus excepturi perferendis, iste veniam temporibus maxime magni blanditiis iure rerum. Tempore minima ducimus eum inventore mollitia necessitatibus dolor! Inventore maiores accusantium mollitia assumenda praesentium atque ratione unde!</p>      
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, consequuntur alias similique eveniet nam, ex eum suscipit eius illo aliquam placeat autem accusamus excepturi perferendis, iste veniam temporibus maxime magni blanditiis iure rerum. Tempore minima ducimus eum inventore mollitia necessitatibus dolor! Inventore maiores accusantium mollitia assumenda praesentium atque ratione unde!</p>     
                        </div>

                        <div className="col-md-6" data-aos="zoom-in-left" >
                            <img src="../img/geekly.PNG" alt="geekly" className="w-100"/>
                        </div>
                    </div>
                </div>

            </section>
        </Fragment>
    );
}

export default Apropos;