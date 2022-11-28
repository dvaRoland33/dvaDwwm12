import React from "react"
import "../assets/css/complement.css"

class PaveHoraires extends React.Component {

  render(){
      return(    
        <div >        
            <div className="col txt-orange">
                <h5 className="fbandeau">OUVERTURE: <span className="txt-blanc">Du Lundi au Samedi</span></h5>  
                <h5 className="fbandeau">HORAIRES: <span className="txt-blanc">de 9h à 17h</span></h5>
            </div>	
        </div>
        )
    }
}

export default PaveHoraires
