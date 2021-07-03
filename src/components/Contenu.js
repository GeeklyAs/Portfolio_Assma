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
import Copyright from './Copyright'

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
            {/* <Copyright />  */}



            
        </div>
    )
}

export default Contenu
