import React from 'react';
import './Contact.css';
// import "aos/dist/aos.css"
import emailjs from "emailjs-com";
import { FaGithub } from "react-icons/fa"
import { AiFillLinkedin } from "react-icons/ai"


function Contact() {


    function popup() {
        alert('message sent successfully')
      }
    
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
        <div id='5' className="contactAll pt-5 pb-3">
            <div className=" pgauche container">
            <form onSubmit={sendEmail}>
                    <div className="contactTest row d-flex justify-content-center align-items-center pb-5">
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
                                <input onClick={popup} type="submit" className="btnn" value="Send Message"></input>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="reseau text-center">
                    <a href="https://www.linkedin.com/in/assma-sayed-9372a3114/"  target="_blank"><i> <AiFillLinkedin /> </i></a>
                    <a href="https://github.com/GeeklyAs"  target="_blank"><i><FaGithub /></i></a>

                </div>

           <center><hr /></center> 
            <div className=" copy text-center">
                <span className="" dangerouslySetInnerHTML={{ "__html": " Assma Sayed - Geekly &copy; 2021" }} /> <br />
                <span className="">Created in React JS </span>
            </div>
            </div>
        </div>
    )
}
export default Contact