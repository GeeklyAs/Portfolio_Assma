import React, { Fragment } from 'react';
import { FaBeer } from 'react-icons/fa';

import './Copyright.css'


function Copyright () {
    return (
        <Fragment>
            <footer className="copyright">
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

