import React from "react"
import "../assets/css/complement.css"
import logo from "../assets/images/icon1.png"

class PaveFinancement extends React.Component {

  render(){
      return(    
        <div className="d-flex ">        
            <div className="col-3 text-color-white ">
                <img src={logo} alt="logo" className="iconeBandeau" />
            </div>  
            <div className="col"> 
                <h3 className="text-uppercase txt-noir fbandeau ">FINANCEMENT</h3>  
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laudantium at dolor rerum velit ipsum unde nisi quidem sit debitis autem illum ad reprehenderit quis. Delectus quaerat odit suscipit voluptatem.</p>     
            </div>	
        </div>
        )
    }
}

export default PaveFinancement 
