import React from "react"
import "../assets/css/complement.css"


class ContactEtendu extends React.Component {
    constructor(props){
        super(props)
        this.state={ nom:'',
                    prenom:'',
                    telephone:'',
                    mail:'',
                    message:''
                    }
        this.changeNom   = this.changeNom.bind(this) 
        this.changePrenom   = this.changePrenom.bind(this) 
        this.changeTelephone = this.changeTelephone.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeMessage= this.changeMessage.bind(this)
        this.soumetFormulaire = this.soumetFormulaire.bind(this)         
    }                

    changeNom(event) {
            this.setState({nom: event.target.value})
        }     
    changePrenom(event) {
            this.setState({prenom: event.target.value})
        } 
    changeTelephone(event) {
            this.setState({telephone: event.target.value})
        }           
    changeEmail(event) {
            this.setState({email: event.target.value})
        }
    changeMessage (event){
            this.setState({message: event.target.value})
        }    
    soumetFormulaire(event){
            //le formulaire a été soumis
            console.log('formulaire soumis')

     } 
    
    render(){
    return (
      <div >       
            <h2 className="ps-2 pt-3 p-4">CONTACTEZ NOUS</h2>
            <div className="row">
                <div className="col-8"> {/* colonne gauche*/}
                    <div className="container">
                      <div className="row">
                        <div className="col-6">
                            <label >Pr&eacute;nom*
                                <input className="form-control champContact" id="prenom" name="prenom" type="text" placeholder="Entrez Votre Pr&eacute;nom"
                                onChange={this.changePrenom} required/>
                            </label>
                        </div>
                        <div className="col-6">
                            <label >Nom*
                                <input className="form-control champContact" id="nom" name="nom" type="text" placeholder="Entrez Votre nom"
                                onChange={this.changeNom} required />
                            </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                            <label >Email*
                                <input className="form-control champContact" id="email" name="email" type="text" placeholder="adresse@email.fr" 
                                onChange={this.changeEmail} pattern='*\.*\@*\.*' required/>
                            </label>
                        </div>
                        <div className="col-6">
                            <label >T&eacute;l&eacute;phone
                                <input className="form-control champContact" id="telephone" name="telephone" 
                                type="text" placeholder="00-00-00-00-00" 
                                pattern="^[0-9]{2}\-[0-9]{2}\-[0-9]{2}\-[0-9]{2}\-[0-9]{2}$" 
                                onChange={this.changeTelephone}/>
                            </label>
                        </div>
                      </div>
                  </div>
                </div>  
                <div className="col-4"> {/* colonne droite*/}
                    <div className="row">
                        <div className="col-12">
                            <label >Message
                                <textarea className="form-control champContact" id="message" name="message" rows="4"
                                onChange={this.changeMessage} placeholder="Entrez Votre message" />
                            </label> 
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default ContactEtendu