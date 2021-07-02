import React, { Fragment, useEffect } from 'react'
import "aos/dist/aos.css"
import Aos from 'aos'
import Card from 'react-bootstrap/Card'
import './Galerie.css'


function Galerie() {
    useEffect(()=> {
        Aos.init({duration: 2000});
    }, [])
    // let addStyleGalerie =(e) => {
    //     if (e.target.classList.contains('galerie')) {
    //         e.target.classList.remove('galerie')
    //     }else{
    //         e.target.classList.add('galerie')
    //     }
    // }

    return (
        <Fragment>
            <div id="4" className="galerie" >
                <div className="titreGalerie pt-5">
                    <h1 className=" animate__animated animate__pulse">PORTFOLIO</h1>
                    <p data-aos="fade-right">My project : </p>
                </div>
                <div className="row pb-5 ">
                    <Card className="cardsGalerie textHover col-lg-7 col-md-12 mt-3  p-0 "data-aos="fade-up" >
                        <Card.Img className="imgGalerie " src="../img/realisations/capture.png" />
                        <div className="middle">
                            <div className="text">
                                 <span className="titreHover">Jalapenoddle</span>  
                                 <br />  
                                 REACT - JAVASCRIPT - RESPONSIV
                            </div>
                        </div>
                    </Card>    
                </div>
                <div className="row pb-5 ">
                    <Card className="cardsGalerie textHover p-0 col-lg-7 col-md-12 mt-3  " data-aos="fade-down">
                        <Card.Img className="imgGalerie"  src="../img/realisations/sitechef.png" />
                        <div className="middle">
                            <div className="text" data-aos="zoom-in-up">
                                 <span className="titreHover">Site Du Chef </span>  
                                 <br />  
                                 HTML - CSS - RESPONSIV
                            </div>
                        </div>
                    </Card>            
                </div>
                <div className="row pb-5">
                    <Card className="cardsGalerie textHover p-0 col-lg-7 col-md-12 col-xs-12 mt-3 " data-aos="fade-down" >
                        <Card.Img className="imgGalerie"  src="../img/realisations/epilogue_screen.png" />
                        <div className="middle">
                            <div className="text">
                                 <span className="titreHover">Epilogue</span>  
                                 <br />  
                                 HTML - CSS - RESPONSIV
                            </div>
                        </div>
                    </Card>
                </div>

                    <div className="row pb-5">    
                    <Card className="cardsGalerie textHover p-0 col-lg-7 col-md-12 col-xs-12 mt-3 " data-aos="fade-down" >
                        <Card.Img className="imgGalerie"  src="../img/realisations/spatial.png" />
                        <div className="middle">
                            <div className="text">
                                 <span className="titreHover">Spatial</span>  
                                 <br />  
                                 HTML - CSS - JAVASCRIPT 
                            </div>
                        </div>
                    </Card>            
                </div>
            </div>
        </Fragment>
    )
}

export default Galerie
