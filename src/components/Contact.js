// import React from 'react';
// import './Contact.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import { send } from 'emailjs-com';

// function Contact() {

//     // function addForm(){
//     //     let form = document.getElementById('divForm')
//     //     form.classList.toggle('form')
//     //     form.classList.toggle("addForm")
//     // }

//     return (
//         <div id="divForm" className="form container">    
//             <div className="col-md-12 titreCompetence">
//                 <h1 className=" animate__animated animate__pulse text-center">CONTACT</h1>
//                 <p className="text-center" data-aos="zoom-in-up">My work tools :</p>
//             </div>

//             <Form>
//             <Form.Row>
//                 <Form.Group as={Col} controlId="formGridEmail">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter your name" required/>
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formGridPassword">
//                 <Form.Label>Firstname</Form.Label>
//                 <Form.Control type="text" placeholder="Enter your firstname" required/>
//                 </Form.Group>
//             </Form.Row>

//             <Form.Group controlId="formGridAddress1">
//                 <Form.Label>Mail address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" required/>
//             </Form.Group>


//             <Form.Row>
//                 <Form.Group as={Col} controlId="formGridCity">
//                 <Form.Label>Phone number</Form.Label>
//                 <Form.Control placeholder="+32 " required/>
//                 </Form.Group>
//                 <Form.Group controlId="exampleForm.ControlTextarea1">
//                     <Form.Label>Your message</Form.Label>
//                     <Form.Control placeholder="what is your question?" as="textarea" rows={3} />
//                 </Form.Group>

//             </Form.Row>


//             <Button id="envoi" variant="primary" type="submit">
//                 Envoyer
//             </Button>
            
//             </Form>
//         </div>
//     )
// }

// export default Contact
import emailjs from "emailjs-com";
import React from 'react';
import './Contact.css';


function Contact() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm("geekly_mail", 'template_w3tw0d1', e.target, 'user_3QqmSQEl5ANTO2f66t9Ym')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div id='6' className="contactAll pt-5">
            <div className=" pgauche container">
            <form onSubmit={sendEmail}>
                    <div className="row d-flex justify-content-center align-items-center pb-5">
                        <div className="coord col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center flex-column pb-5">
                        <h1>Your contact details</h1>

                            <div className="col-8 form-group ">
                            <h5>Your name:</h5>
                                <input type="text" className="form-control inputBorder" placeholder="Name" name="name"/>
                            </div>
                            <div className="col-8 form-group pt-2">
                            <h5>Your adress mail:</h5>
                                <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                            </div>
                            <div className="col-8 form-group pt-2">
                            <h5>Your phone number:</h5>
                                <input type="number" className="form-control" placeholder="+32" name="number" />
                            </div>
                        </div>
                        <div className="message col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center flex-column ">
                            <h1 className="mt-3">Your message</h1>
                            <div className="col-8 form-group  ">
                                <h5>Email subject :</h5>
                                <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                            </div>
                            <div className="col-8 form-group pt-2">
                            <h5>Your message:</h5>
                                <textarea className="form-control" id="" cols="30" rows="5" placeholder="I respond quickly!" name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 d-flex">
                                <input type="submit" className="btnn" value="Send Message"></input>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Contact