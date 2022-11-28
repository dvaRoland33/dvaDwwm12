import React from "react"
import "../assets/css/complement.css"
import logo from "../assets/images/icon-telephone.png"

class PaveTelephone extends React.Component {

  render(){
      return(    
        <div className="d-flex">        
            <div className="col-3 text-color-white">
               <img src={logo} alt="logo" className="iconeBandeau"/>
            </div>  
            <div className="col"> 
                <h5 className="text-uppercase txt-orange fbandeau">t&eacute;l&eacute;phone:</h5>  
                <h5 className="txt-blanc fbandeau">01 23 45 67 89</h5>
            </div>	
        </div>
        )
    }
}

export default PaveTelephone 
