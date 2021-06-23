import React, { Fragment, useEffect } from 'react'
import "aos/dist/aos.css"
import Aos from 'aos'
// import Card from 'react-bootstrap/Card'
// import CardDeck from 'react-bootstrap/CardDeck'
import './Services.css'


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
            <div id="2" className="services m-0">
                <div className="titreServices">
                    <h1 className=" animate__animated animate__pulse">SERVICES</h1>
                    <p data-aos="fade-right">The services I offer : </p>
                </div>
                <div className="row d-flex justify-content-center m-0 ">                
                    <div className=" col-lg-3 cards" onMouseOver={addStyleBorder} data-aos="fade-up" data-aos-duration="1000">
                        <div className="imgDiv" data-aos="fade-down">
                            <img onMouseOver={addStyle} src="../img/responsiv.png" alt="responsiv" className="img styled"/>
                        </div>
                    <h4 data-aos="fade-right">RESPONSIV DESIGN</h4>
                    <span onMouseOver={addStyle} className="styled">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis neque accusamus unde. Facilis, ducimus? Impedit, repudiandae odio. Qui magnam illum sed? Quidem quisquam magnam quaerat, doloribus delectus sint ipsum tempore?</span>
                    </div>
                    <div className="col-lg-3 cards" onMouseOver={addStyleBorder} data-aos="fade-up" data-aos-duration="1000">
                        <div className="imgDiv"data-aos="fade-down">
                            <img onMouseOver={addStyle} src="../img/coding2.png" alt="coding" className="img styled" />
                        </div>
                        <h4 data-aos="fade-right">WEB DEVELOPER</h4>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis neque accusamus unde. Facilis, ducimus? Impedit, repudiandae odio. Qui magnam illum sed? Quidem quisquam magnam quaerat, doloribus delectus sint ipsum tempore?</span>
                    </div>
                    <div className=" col-lg-3 cards" onMouseOver={addStyleBorder} data-aos="fade-up" data-aos-duration="1000">
                        <div className="imgDiv" data-aos="fade-down">
                            <img onMouseOver={addStyle} src="../img/photography.png" alt="photography" className="img styled"/>
                        </div>
                        <h4 data-aos="fade-right">WEB DESIGN</h4>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis neque accusamus unde. Facilis, ducimus? Impedit, repudiandae odio. Qui magnam illum sed? Quidem quisquam magnam quaerat, doloribus delectus sint ipsum tempore?</span>
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
