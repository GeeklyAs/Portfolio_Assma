import React, { Fragment, useEffect } from 'react'
import "aos/dist/aos.css"
import Aos from 'aos'
// import Card from 'react-bootstrap/Card'
// import CardDeck from 'react-bootstrap/CardDeck'
import './ServicesFr.css'


function Services() {
    useEffect(()=> {
        Aos.init({duration: 2000});
    }, [])
    let addStyle =(e) => {
        if (e.target.classList.contains('styled')) {
            e.target.classList.remove('styled')
        }else{
            e.target.classList.add('styled')
        }
    }
    let addStyleBorder =(e) => {
        if (e.target.classList.contains('styledBorder')) {
            e.target.classList.remove('styledBorder')
        }else{
            e.target.classList.add('styledBorder')
        }
    }


    return (
        <Fragment>
            <div id="2fr" className="services m-0 pt-5">
                <div className="titreServices">
                    <h1 className=" animate__animated animate__pulse">SERVICES</h1>
                    <p data-aos="fade-right">Les services que je propose : </p>
                </div>
                <div className="cardTest row d-flex justify-content-center m-0 ">                
                    <div className=" col-lg-3 cards" onMouseOver={addStyleBorder} data-aos="fade-up" data-aos-duration="1000">
                        <div className="imgDiv" data-aos="fade-down">
                            <img onMouseOver={addStyle} src="../img/responsiv.png" alt="responsiv" className="img styled"/>
                        </div>
                    <h4 data-aos="fade-right">RESPONSIV DESIGN</h4>
                    <span onMouseOver={addStyle} className="styled">
                         De la version ordinateur à la version tablette jusqu'au format téléphone l'utilisateur 
                         peut ainsi consulter votre site Web à travers une large gamme d'appareils.</span>
                    </div>
                    <div className="col-lg-3 cards" onMouseOver={addStyleBorder} data-aos="fade-up" data-aos-duration="1000">
                        <div className="imgDiv"data-aos="fade-down">
                            <img onMouseOver={addStyle} src="../img/coding2.png" alt="coding" className="img styled" />
                        </div>
                        <h4 data-aos="fade-right">WEB DEVELOPER</h4>
                        <span>
                        Du site vitrine au projet plus complexe, je vous propose une expertise et un développement web à la hauteur de vos attentes et de vos besoins.
                        </span>
                    </div>
                    <div className=" col-lg-3 cards" onMouseOver={addStyleBorder} data-aos="fade-up" data-aos-duration="1000">
                        <div className="imgDiv" data-aos="fade-down">
                            <img onMouseOver={addStyle} src="../img/photography.png" alt="photography" className="img styled"/>
                        </div>
                        <h4 data-aos="fade-right">WEB DESIGN</h4>
                        <span>
                        Vous ne savez pas quel design utiliser pour votre site ? Pas de logo à l'effigie de votre entreprise ? Je m'occupe de tout !</span>
                    </div>
                </div>
                {/* <div className="col-3 cards">
                    <div>
                        <img src="../img/photography.png" alt="" className="img"/>
                    </div>
                    <h2>Photography</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis neque accusamus unde. Facilis, ducimus? Impedit, repudiandae odio. Qui magnam illum sed? Quidem quisquam magnam quaerat, doloribus delectus sint ipsum tempore?</span>
                </div> */}
            </div>
        </Fragment>
    )
}

export default Services
