import React from "react";
import Entete from "./Entete";
import PiedsDePage from "./PiedsDePage";
import AccueilPourquoi from "./AccueilPourquoi";
import AccueilClub from "./AccueilClub";
import AccueilBienvenue from "./AccueilBienvenue";
import AccueilOrientation from "./AccueilOrientation";
import AccueilVehicules from "./AccueilVehicules";

import "../assets/css/complement.css";

function Accueil() {
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
    );
  }

  export default Accueil; 