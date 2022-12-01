import React from "react"
import Entete from "./Entete"
import PiedsDePage from "./PiedsDePage"
import AccueilPourquoi from "./AccueilPourquoi"
import AccueilClub from "./AccueilClub"
import AccueilBienvenue from "./AccueilBienvenue"
import AccueilOrientation from "./AccueilOrientation"
import AccueilVehicules from "./AccueilVehicules"

/* la page d'accueil est composé de composants écrits
    Entete
      AccueilPourquoi
      AcceuilClub
      AccueilBienvenue
      AccueilOrientation
      AccueilVehicules
    PiedsDePage
    il sera possible ainis de revoir la composition de cette page en réorganisant les blocs ou leur ordre d'appel
*/

class Accueil extends React.Component {
  render(){
    return (
      <div >  
        <Entete />

        <section>       
          <AccueilBienvenue />
        </section>

        <section className="row d-flex">
		      <AccueilOrientation />
	      </section>	

        <section className="bkg-noir txt-blanc ">
          <AccueilVehicules  />
	      </section> 

        <section>
          <AccueilPourquoi />
        </section>

        <section>
          <AccueilClub />
        </section>

        <PiedsDePage />
      </div>
    )
  }
  }

  export default Accueil 