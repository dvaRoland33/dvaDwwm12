import logo from "../assets/images/icone-voiture.png" 
import "../assets/css/complement.css" 
import React from "react"
import SliderDouble from "./SliderDouble"

class Rechercher extends React.Component{   
    

    render(){
        return(
            <div className="col-11  w-80 boiteOmbre">
                <div className="border bg-white mb-2">
                <div className="bkg-noir txt-blanc fs-2 hauteurTitreRecherche">
                    <img src={logo} alt="logo voiture" className="iconeBandeau"/>
                    Rechercher
                </div>
                <form className="container ps-4 pt-4">
                    <select name="type" className="row col-12 elementRecherche">
                        <option value="0">Type</option>
                        <option value="1">Berline</option>
                        <option value="2">Cabriolet</option>
                        <option value="3">SUV</option> 
                        <option value="5">4x4</option>
                        <option value="6">Coup&eacute;</option>
                    </select>
                    <select name="Carburant" className="row col-12 elementRecherche">
                        <option value="0">Carburant</option>
                        <option value="1">Essence</option>
                        <option value="2">Gazole</option>
                        <option value="3">GPL</option>
                        <option value="4">Electrique</option>
                    </select>
                    <select name="Marque" className="row col-12 elementRecherche">
                        <option value="0">Marque</option>
                        <option value="1">Renault</option>
                        <option value="2">Peugeot</option>
                        <option value="3">Fiat</option>
                        <option value="4">WolskVagen</option>
                    </select>
                    <select name="modele" className="row col-12 elementRecherche">
                        <option value="0">Modèle</option>
                    </select>
                    <select name="Kilometrage" className="row col-12 elementRecherche">
                        <option value="0">kilométrage maximal</option>
                        <option value="1">&lt;10 000 km</option>
                        <option value="2">de 10 000 à 20 000 km</option>
                        <option value="3">&gt;20 000 km</option>
                    </select>
                    <select name="anciennete" className="row col-12 elementRecherche">
                        <option value="0">Anciennet&eacute;</option>
                        <option value="1">moins de 1 An</option>
                        <option value="2">de 1 à 2 ans</option>
                        <option value="3">plus de 2 ans</option>
                    </select>
                    <p className="row col-12 mt-3">Prix</p>
                        <SliderDouble />
                    <div className="row col-12 mb-5 ">               
                        <input type="reset" value="Réinitialiser" className="elementRecherche bkg-bleu txt-blanc uppercase"></input>   
                    </div>            
                    </form>
                </div>
            </div>
        )
    }
}

export default Rechercher