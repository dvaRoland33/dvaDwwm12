import React from "react"
import EnteteSimplifie from "./EnteteSimplifie"
import PiedsDePage from "./PiedsDePage"
import ContactMobile from "./ContactMobile"
import ContactEtendu from "./ContactEtendu"
import img1 from "../assets/images/vehicule3.webp"

/* la page contact est composé de composants écrits
    Entetesimplifié
      ContactMobile 
        ou
      ContactEntendu
    PiedsDePage
    l'appel de la mise en page responsive est faite par des règles BootStrap 
    cela permet d'avoir un ordre et une gestion des champs totalement indépendante   
    NB: il est fait appel à une version d'entête simplifiée 
*/

class Contact extends React.Component {
  render(){
    return (
      <div >
        <EnteteSimplifie />
        <div>
          <img src={img1} alt='fond' className="img-fluid"/>
        </div>
        <div className="d-md-none img-fluid pt-5 positionRecherche">         
          <ContactMobile /> 
        </div>
        <div className="d-none d-md-block img-fluid pt-5 positionRecherche">
          <ContactEtendu /> 
        </div>
        <PiedsDePage />
      </div>
    )
  }
}

  export default Contact