import React from 'react'
import BannerFr from './BannerFr'
import NavbarFr from "../Francais/Nav/NavbarFr"
import AproposFr from './AproposFr'
import ServicesFr from './ServicesFr'
import CompetenceFr from './CompetenceFr'
import InfoFr from './InfoFr'
import GalerieFr from './GalerieFr'
import ContactFr from './ContactFr'
function ContenuFrancais() {
    return (
        <div>
            <NavbarFr />   
            <BannerFr />
            <AproposFr />   
            <ServicesFr />      
            <CompetenceFr/>
            <InfoFr />
            <GalerieFr />
            <ContactFr />
        </div>
    )
}

export default ContenuFrancais
