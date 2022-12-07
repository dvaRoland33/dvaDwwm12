import React from "react"
import EnteteSimplifie from "./EnteteSimplifie"
import PiedsDePage from "./PiedsDePage"
import ContactMobile from "./ContactMobile"
import ContactEtendu from "./ContactEtendu"
import "../assets/css/complement.css"

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

function confirmationFormulaire()
{ 
  return (
  alert('module enregistrement contact non developpé!')
  )
}


class Contact extends React.Component {
  render(){
    return (
      <div >
        <EnteteSimplifie />
        <div className="fondContact">
        </div>
        <div className="offset-1 col-10 pt-5 pb-5 center positionRecherche">
          <form id="frmContact" className="form-control d-block boiteOmbre">
            <div className="container">
              <div className="d-md-none img-fluid pt-5 ">         
                <ContactMobile /> 
                <div className="row mt-5 offset-3 col-6">
                  <button type="submit" className="btn btn-primary " onClick={confirmationFormulaire}>ENVOYEZ</button>
                </div> 
              </div>
              <div className="d-none d-md-block img-fluid pt-5">
                <ContactEtendu />  
                <div className="offset-8 col-5 mt-3 mb-3">
                  <button type="submit" className="btn btn-primary " onClick={confirmationFormulaire}>ENVOYEZ</button>
                </div> 
              </div>
            </div>
          </form> 
        </div>
        <PiedsDePage />
      </div>
    )
  }
}
export default Contact