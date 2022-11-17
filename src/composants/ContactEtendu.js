import React from "react";
import "../assets/css/complement.css"

function ContactEtendu() {
    return (
      <div className="offset-1 col-10">
        <div className="container bkg-blanc border">
            <h2 className="ps-2 pt-3 p-4">CONTACTEZ NOUS</h2>
            <div className="row">
                <div className="col-8">
                    <div className="container">
                      <div className="row">
                        <div className="col-6">
                            <label for="prenom">Pr&eacute;nom*
                                <input className="form-control champContact" id="prenom"
                                type="text" placeholder="Entrez Votre Pr&eacute;nom"/>
                            </label>
                        </div>
                        <div className="col-6">
                            <label for="nom">Nom*
                                <input className="form-control champContact" id="nom"
                                type="text" placeholder="Entrez Votre nom"/>
                            </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                            <label for="email">Email*
                                <input className="form-control champContact" id="email"
                                type="text" placeholder="Entrez une adresse email valide"/>
                            </label>
                        </div>
                        <div className="col-6">
                            <label for="telephone">T&eacute;l&eacute;phone
                                <input className="form-control champContact" id="telephone"
                                type="text" placeholder="Entrez un num&eacute;ro de t&eacute;l&eacute;phone"/>
                            </label>
                        </div>
                      </div>
                  </div>
                </div>  
                <div className="col-4">
                    <label for="message">Message
                        <textarea className="form-control champContact" id="message" rows="4"
                        placeholder="Entrez Votre message"/>
                    </label>
                </div>
            </div>
            <div className="offset-8 col-4 mt-3 mb-3" >
                <button type="submit" class="btn btn-primary">ENVOYEZ</button>
            </div>
        </div>
      </div>
    );
  }

  export default ContactEtendu; 