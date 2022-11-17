import React from "react";
import Entete from "./Entete";
import PiedsDePage from "./PiedsDePage";
import DetailVehiculeMobile from "./DetailVehiculeMobile";
import DetailVehiculeEtendu from "./DetailVehiculeEtendu";

function DetailVehicule() {
    return (
      <div>
        <Entete />
        <div className="d-block d-md-none">
          <DetailVehiculeMobile />
        </div>

        <div className="d-none d-md-block">
          <DetailVehiculeEtendu />
        </div>

        <PiedsDePage />
      </div>
    );
  }

  export default DetailVehicule; 