import React, { Fragment } from 'react';
import './Copyright.css'


function Copyright () {
    return (
        <Fragment>
            <footer className="copyright">
                <div className="reseau">
                    <a href="https://www.linkedin.com/in/jamila-hammani/"  target="_blank"><i className="icon fab fa-linkedin "></i></a>
                    <a href="https://github.com/JamilaaH"  target="_blank"><i className="icon fab fa-github "></i></a>
                </div>
                <hr/>
                <div className=" copy text-center">
                    <span className="" dangerouslySetInnerHTML={{ "__html": " Assma Sayed - Geekly &copy; 2021" }} /> <br />
                    <span className="">made in React JS </span>
                </div>
            </footer>
        </Fragment>
    );
};

export default Copyright;

