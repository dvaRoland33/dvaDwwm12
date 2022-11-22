import React from "react"
import "../assets/css/complement.css"

class ContactMobile extends React.Component {
    render(){
    return (
      <div className="offset-1 col-10 pt-5 pb-5 center">
        <form className="form-control d-block">
            <h2>CONTACTEZ NOUS</h2>                  
            <div className="mb-3">
                <label for="prenom">Pr&eacute;nom*
                    <input id="prenom" name="prenom" className="form-control champContact" 
                    type="text" placeholder="Entrez votre pr&eacute;nom"/>
                </label>
                <label for="nom">Nom*
                    <input id="nom" name="nom" className="form-control champContact" 
                    type="text" placeholder="Entrez votre nom"/>
                </label>
                <label for="email">Email*
                    <input id="email" name="email" className="form-control champContact" 
                    type="email" placeholder="Entrez une adresse mail valide"/>
                </label>
                <label for="telephone">T&eacute;l&eacute;phone
                    <input id="telephone" name="telephone" className="form-control champContact" 
                    type="phone" placeholder="Entrez un num&eacute;ro de t&eacute;l&eacute;phone valide"/>
                </label>
                <label for="message">Message
                    <textarea id="message" name="message" className="form-control champContactMessage" 
                    rows="5" placeholder="Entrez votre message"/>
                </label>
            </div>
  
            <button type="submit" className="btn btn-primary">ENVOYEZ</button>
        </form>
      </div>
    )
  }
}

  export default ContactMobile