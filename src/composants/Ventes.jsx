import React from "react"
import Entete from "./Entete"
import PiedsDePage from "./PiedsDePage"
import Rechercher from "./Rechercher"
import Articles from "./Articles"

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
              <div className="col-5">
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