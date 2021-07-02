import React from 'react'
import Contenu from './components/Contenu'
// import Navbar from './components/Nav/Navbar'
import ContenuFrancais from './components/Francais/ContenuFrancais'
// import ContenuAnglais from './components/Francais/ContenuAnglais'

import {BrowserRouter, Route, Switch} from "react-router-dom";
// import Switch from 'react-bootstrap/esm/Switch';



function App() {
  return (
      // <BrowserRouter>
      // <Switch>
      //     <Route path="/fr" component={ContenuFrancais} />
      //     {/* <Route exact path="/en" component={ContenuAnglais} /> */}

      //     {/* <Route path="/" component={Navbar} /> */}
      //     <Route path="/" component={Contenu} />
      // </Switch>
      // </BrowserRouter>
      <Contenu/>
  )
}


export default App


