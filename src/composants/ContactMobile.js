import React from "react";
import "../assets/css/complement.css"

function ContactMobile() {
    return (
      <div className="offset-1 col-10 pt-5 pb-5 center">
        <form className="form-control d-block">
            <h2>CONTACTEZ NOUS</h2>                  
            <div class="mb-3">
                <label for="prenom">Pr&eacute;nom*
                    <input className="form-control champContact" type="text" 
                    id="prenom" placeholder="Entrez votre pr&eacute;nom"/>
                </label>
                <label for="nom">Nom*
                    <input className="form-control champContact" type="text" 
                    id="nom" placeholder="Entrez votre nom"/>
                </label>
                <label for="email">Email*
                    <input className="form-control champContact" type="email" 
                    id="email" placeholder="Entrez une adresse mail valide"/>
                </label>
                <label for="telephone">T&eacute;l&eacute;phone
                    <input className="form-control champContact" type="phone" 
                    id="telephone" placeholder="Entrez un num&eacute;ro de t&eacute;l&eacute;phone valide"/>
                </label>
                <label for="message">Message
                    <textarea className="form-control champContactMessage" rows="5" 
                    id="message" placeholder="Entrez votre message"/>
                </label>
            </div>
  
            <button type="submit" class="btn btn-primary">ENVOYEZ</button>
        </form>
      </div>
    );
  }

  export default ContactMobile; 