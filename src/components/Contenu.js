import React from 'react'
import Navbar from './Nav/Navbar'
import Banner from './Banner'
import Apropos from './Apropos'
import Services from './Services'
import Competence from './Competences'
import Info from './Info'
import Galerie from './Galerie'
import Contact from './Contact'
// import Reseau from './Reseau'


function Contenu() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Apropos />
            <Services />
            <Competence />
            <Info /> 
            <Galerie />
            <Contact />
            {/* <Reseau /> */}



            
        </div>
    )
}

export default Contenu
