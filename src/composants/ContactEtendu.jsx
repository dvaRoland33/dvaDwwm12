import React from "react"
import "../assets/css/complement.css"

class ContactEtendu extends React.Component {
    render(){
    return (
      <div className="container">
        <form className="col-12 bkg-blanc boiteOmbre">
            <h2 className="ps-2 pt-3 p-4">CONTACTEZ NOUS</h2>
            <div className="row">
                <div className="col-8"> {/* colonne gauche*/}
                    <div className="container">
                      <div className="row">
                        <div className="col-6">
                            <label for="prenom">Pr&eacute;nom*
                                <input className="form-control champContact" id="prenom" name="prenom" type="text" placeholder="Entrez Votre Pr&eacute;nom"
                                required/>
                            </label>
                        </div>
                        <div className="col-6">
                            <label for="nom">Nom*
                                <input className="form-control champContact" id="nom" name="nom" type="text" placeholder="Entrez Votre nom"
                                required />
                            </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                            <label for="email">Email*
                                <input className="form-control champContact" id="email" name="email" type="text" placeholder="adresse@email.fr" required/>
                            </label>
                        </div>
                        <div className="col-6">
                            <label for="telephone">T&eacute;l&eacute;phone
                                <input className="form-control champContact" id="telephone" name="telephone" 
                                type="text" placeholder="00-00-00-00-00" 
                                pattern="^[0-9]{2}\-[0-9]{2}\-[0-9]{2}\-[0-9]{2}\-[0-9]{2}$" />
                            </label>
                        </div>
                      </div>
                  </div>
                </div>  
                <div className="col-4"> {/* colonne droite*/}
                    <div className="row">
                        <div className="col-12">
                            <label for="message">Message
                                <textarea className="form-control champContact" id="message" name="message" rows="4"
                                placeholder="Entrez Votre message"/>
                            </label> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="offset-8 col-5 mt-3 mb-3" >
                <button type="submit" className="btn btn-primary">ENVOYEZ</button>
            </div>
        </form>
      </div>
    )
  }
}

export default ContactEtendu