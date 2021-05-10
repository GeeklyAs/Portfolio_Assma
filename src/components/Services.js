import React, { Fragment, useEffect } from 'react'
import "aos/dist/aos.css"
import Aos from 'aos'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import './Services.css'


function Services() {
    useEffect(()=> {
        Aos.init({duration: 2000});
    }, [])
    return (
        <Fragment>
            <section className="services pt-5">
                <div className="container">
                    <div className="pt-5">
                        <h1 className="text-center animate__animated animate__pulse">SERVICES</h1>
                    </div>
                    <div className="pt-3">
                        <CardDeck className="row ">
                            <Card className="col-4 cards">
                                <Card.Img className="img"  src="../img/responsiv.png" />
                                <Card.Body>
                                <Card.Title>Responsiv Design</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="col-4">
                                <Card.Img variant="top" src="../img/coding.png" />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="col-4">
                                <Card.Img variant="top" src="../img/photography.png" />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </div>
                </div>                
            </section>
        </Fragment>
    )
}

export default Services
