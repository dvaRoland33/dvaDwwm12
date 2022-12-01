import React from "react"
import Entete from "./Entete"
import PiedsDePage from "./PiedsDePage"
import Rechercher from "./Rechercher"
import Articles from "./Articles"

/* la page d'accueil est composé de composants écrits
    Entete
      Rechercher 
      Articles
    PiedsDePage
    la gestion de l'ordre d'affichage responsive est gérée par des régles BootStrap
    Cette page a servit de base pour al page locations
    avec le changement de la balise
    <p className="TitreVentes">LOCATION</p>
*/

class Ventes extends React.Component {
  render(){
    return (
      <div>
        <Entete />
        <div className="fondVentes">
         <p className="TitreVentes">VENTE</p> 
        </div>

        <div className="d-block d-md-none">
          <div className="positionRecherche">
            <Rechercher /> 
          </div>
          <div>
            <Articles />
            <Articles />
            <Articles />
            <Articles />
          </div>
        </div>

        <div className="d-none d-md-block">
          <div className="container">
            <div className="row">
              <div className="col-7">
                <Articles />
              </div>
              <div className="col-5 positionRecherche">
                  <Rechercher /> 
              </div>
            </div>
          </div>
        </div>
        <PiedsDePage />
      </div>
    )
  }
  }

  export default Ventes 