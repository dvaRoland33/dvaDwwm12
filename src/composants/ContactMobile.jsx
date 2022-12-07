import React from "react"
import "../assets/css/complement.css"

class ContactMobile extends React.Component {
    render(){
    return (  
        <div>
            <div className="container">
                <div className="row">
                    <h2>CONTACTEZ NOUS</h2> 
                    <div className="row">
                        <label >Pr&eacute;nom*
                            <input id="prenom" name="prenom" type="text" className="form-control champContact" placeholder="Entrez votre pr&eacute;nom" />
                        </label>
                    </div>
                      <div className="row">
                        <label >Nom*
                            <input id="nom" name="nom" className="form-control champContact" type="text" placeholder="Entrez votre nom"/>
                        </label>
                    </div>
                   <div className="row">
                        <label >Email*
                            <input id="email" name="email" className="form-control champContact" type="email" placeholder="Entrez une adresse mail valide"/>
                        </label>
                    </div>
                     <div className="row">
                        <label >T&eacute;l&eacute;phone
                            <input id="telephone" name="telephone" type="phone"
                            className="form-control champContact" 
                            placeholder="00-00-00-00-00"
  //                          pattern="^[0-9]{2}\-[0-9]{2}\-[0-9]{2}\-[0-9]{2}\-[0-9]{2}$"
                            />
                        </label>
                    </div>
                  <div className="row col-10">
                        <label >Message
                            <textarea id="message" name="message" className="form-control champContactMessage" rows="5" placeholder="Entrez votre message"/>
                        </label>
                    </div>
                 </div>
            </div>    
      </div>
    )
  }
}
  export default ContactMobile
