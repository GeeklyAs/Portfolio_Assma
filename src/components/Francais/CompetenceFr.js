import React, { Fragment, useEffect, useState } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos'
import './CompetenceFr.css'

function CompetenceFr(props) {
    let [skills] = useState([
        {nom: "HTML", img:'./img/skills/html5.svg'},
        {nom: "CSS", img:'./img/skills/css3.svg'},
        // {nom: "sass", img:'./img/skills/sass.svg'},
        // {nom: "bootstrap", img:'./img/skills/bootstrap.png'},
        {nom: "Javascript", img:'./img/skills/js.png'},
        {nom: "json-file", img:'./img/skills/react.svg'},
        {nom: "github", img:'./img/skills/github-icon.svg'},
        {nom: "photoshop", img:'./img/skills/ps.png'},

    ])

    useEffect(()=> {
        Aos.init({duration: 2000});
    }, [])
    return (
        <Fragment>
            <section id="3fr" className="competence ">
                <div className=" py-5 container">
                    <div className="row">
                        <div className="col-md-12 titreCompetence">
                            <h1 className=" animate__animated animate__pulse text-center">COMPETENCE</h1>
                            <p className="text-center" data-aos="zoom-in-up">Mes outils de travail :</p>
                        </div>
                    </div>
                    <div className="row">
                        {skills.map((go)=>{
                            return (
                            <div className="col-md-2 mt-4 text-center" data-aos="fade-up">
                                <img src={go.img} alt="skill" className=" mx-auto imgSkills" data-aos="flip-left"/>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default CompetenceFr;