import React from "react";
import logo from "../assets/images/icone-voiture.png" 
import "../assets/css/complement.css" 

class Rechercher extends React.Component{
    render(){
        return(
            <div className="col-10 ps-5 w-80">
                <div className="border bg-white mb-2">
                <div className="bkg-noir txt-blanc fs-2 hauteurTitreRecherche">
                    <img src={logo} alt="logo voiture" className="iconeBandeau"/>
                    Rechercher
                </div>
                <form className="ps-4 pt-4">
                    <select name="type" className="col-11 elementRecherche">
                        <option value="0">Type</option>
                        <option value="1">Berline</option>
                        <option value="2">Cabriolet</option>
                        <option value="3">SUV</option> 
                        <option value="5">4x4</option>
                        <option value="6">Coup&eacute;</option>
                    </select>
                    <select name="Carburant" className="col-11 elementRecherche">
                        <option value="0">Carburant</option>
                        <option value="1">Essence</option>
                        <option value="2">Gazole</option>
                        <option value="3">GPL</option>
                        <option value="4">Electrique</option>
                    </select>
                    <select name="Marque" className="col-11 elementRecherche">
                        <option value="0">Marque</option>
                        <option value="1">Renault</option>
                        <option value="2">Peugeot</option>
                        <option value="3">Fiat</option>
                        <option value="4">WolskVagen</option>
                    </select>
                    <select name="modele" className="col-11 elementRecherche">
                        <option value="0">Modèle</option>
                    </select>
                    <select name="Kilometrage" className="col-11 elementRecherche">
                        <option value="0">kilométrage maximal</option>
                        <option value="1">&lt;10 000 km</option>
                        <option value="2">de 10 000 à 20 000 km</option>
                        <option value="3">&gt;20 000 km</option>
                    </select>
                    <select name="anciennete" className="col-11 elementRecherche">
                        <option value="0">Anciennet&eacute;</option>
                        <option value="1">moins de 1 An</option>
                        <option value="2">de 1 à 2 ans</option>
                        <option value="3">plus de 2 ans</option>
                    </select>
                    <p className="col-11 mt-3">Prix</p>
                    <input type="range" min="2000" max="80000" id="mini" className="col-11 elementRecherche"/>
                    
                    <p className="col-11 bkg-grisclair text-center elementRecherche">2000 </p>
                    <p className="col-11 bkg-grisclair text-center elementRecherche">80000</p>  
                    <button id="reinit" className="btn btn-primary text-uppercase elementRecherche col-11">Réinitialiser</button>
                </form>
                </div>
            </div>
        )
    }

}

export default Rechercher