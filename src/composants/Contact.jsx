import React from "react"
import EnteteSimplifie from "./EnteteSimplifie"
import PiedsDePage from "./PiedsDePage"
import ContactMobile from "./ContactMobile"
import ContactEtendu from "./ContactEtendu"
import img1 from "../assets/images/vehicule3.jpg"

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