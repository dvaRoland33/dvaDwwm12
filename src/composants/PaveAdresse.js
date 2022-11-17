import React from "react"
import "../assets/css/complement.css"
import logo from "../assets/images/icone-adresse.png"

class PaveAdresse extends React.Component {

  render(){
      return(    
        <div className="d-flex ">        
            <div className="col-3 text-color-white">
                <img src={logo} alt="logo" className="iconeBandeau" />
            </div>  
            <div className="col"> 
                <h5 class="text-uppercase txt-orange fbandeau ">ADRESSE:</h5>  
                <h5 class="txt-blanc fbandeau">AVENUE CHARLES DE GAULLE<br/>
                     75000 PARIS</h5>
            </div>	
        </div>
        )
    }
}

export default PaveAdresse 
