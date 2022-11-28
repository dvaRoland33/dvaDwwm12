import React from "react"
import BurgerMenu from "./BurgerMenu"
import PaveTelephone from "./PaveTelephone"
import PaveAdresse from "./PaveAdresse"
import PaveHoraires from "./PaveHoraires"
import PaveLogos from "./PaveLogos"
import MenuBar from "./MenuBar"

import "../assets/css/complement.css"

class EnteteSimplifie extends React.Component {
    render(){

    return (
        <header>  
          <div className="container-fluid bg-dark initPage ">
            {/* version mobile */}
              <div className="d-block d-md-none text-bg-dark">
                <div className="row d-flex">
                  <BurgerMenu />
                </div>
                <div className="Row d-flex fbandeauTitre fs-3 ">
                  <h1>CLUB AUTO</h1>
                </div> 
                <div className="Row d-flex">
                  <PaveTelephone />
                </div>
              </div> 
            {/* version etendu */}
              <div className="d-none d-md-block text-bg-dark">
                <div className="Row d-flex">
                  <div className="col-3 fbandeauTitre fs-3 right">CLUB AUTO</div>
                  <div className="col-3"> 
                    <PaveAdresse />
                  </div>
                  <div className="col-2">
                    <PaveTelephone />
                  </div>
                  <div className="col-2">
                    <PaveHoraires />
                  </div>
                  <div className="col-2">
                    <PaveLogos />
                  </div>
                </div>
                <div >
                  <MenuBar /> 
                </div> 
                
              </div>

            </div>
        </header>
      )
    }
} 
export default EnteteSimplifie