import React from "react"
import "../assets/css/complement.css"
import logoFB from "../assets/images/logoFaceBookNB.png"
import logoTWT from "../assets/images/logoTweeterNB.png"

class PaveAdresse extends React.Component {

  render(){
      return(    
        <div className="d-flex ">        
            <div className="col text-color-white">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={logoFB} alt="logo" className="iconeBandeau" />
                </a>
                <a href="https://twitter.com/?lang=fr" target="_blank" rel="noreferrer">
                    <img src={logoTWT} alt="logo" className="iconeBandeau" />
                </a>           
            </div>	
        </div>
        )
    }
}

export default PaveAdresse 
