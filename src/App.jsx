import {React, useState} from "react"
import {
    BrowserRouter as Router,
  //  HashRouter as Router,
    Route,
    //Link,
    Routes
} from "react-router-dom"

import Accueil from "./composants/Accueil"
import Ventes from "./composants/Ventes"
import Locations from "./composants/Locations"
import Contact from "./composants/Contact"
import DetailVehicule from "./composants/DetailVehicule"

class App extends React.Component {  
  render(){
    return (
      <div>    
        <Router>
          <hr />  
          <Routes>
            <Route exact path="/" element={<Accueil />}></Route>
            <Route path="/ventes" element={<Ventes />}></Route>
            <Route path="/locations" element={<Locations />}></Route>
            <Route path="/contact" element ={<Contact />}></Route>
            <Route path="/detailVehicule" element ={<DetailVehicule />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }  
  }
export default App  
