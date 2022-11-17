import React from "react";
import PaveFinancement from "./PaveFinancement";
import PaveReactivite from "./PaveReactivite";
import PaveEcoute from "./PaveEcoute";
import PaveService from "./PaveService";

import "../assets/css/complement.css"

class AccueilPourquoi extends React.Component {
    render(){

    return (
        <div className="ms-5 me-5">  
            <div className="col-12 text-center pt-2">
		        <h1>Pourquoi nous choisir ?</h1>
	        </div>

            <div className="d-block d-md-flex">
                <div className="row">
                    <PaveFinancement />
                </div>
                <div className="row">
                    <PaveReactivite />
                </div>   
                <div className="row">
                    <PaveEcoute />
                </div>  
                <div className="row">
                    <PaveService />
                </div>   
            </div>

            <div className="col-12 text-center pb-3">
                <a href="/contact" >
                    <button type="button" class="btn btn-primary" >CONTACTEZ-NOUS</button>
                </a>        
            </div>
        </div>
      )
    }
} 
export default AccueilPourquoi