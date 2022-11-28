import React from "react"
import "../assets/css/complement.css"
import logoOndes from "../assets/images/ondes.png"
import logoFB from "../assets/images/logoFaceBookNB.png"
import logoTWT from "../assets/images/logoTweeterNB.png"
import logoISG from "../assets/images/logoInstagramNB.png"
import logoGGL from "../assets/images/logoGooglePlusNB.png"
import logoYTB from "../assets/images/logoYoutubeNB.png"

class PiedsDePage extends React.Component{
    render(){    
        return(      
        <footer className='d-block d-md-flex bkg-noir txt-grisclair'>
            <div className="container">
                <div className='row'>
                    <div className="col-12 col-md-3">
                        <h2 className="txt-bleu">CLUB <span className="txt-blanc">AUTO</span></h2>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia vero nam numquam dolores magnam perferendis explicabo blanditiis. Sapiente illum rem autem odio laudantium minima corrupti aliquid. Ducimus laboriosam quo molestiae.</p>
                    </div>
                    <div className="col-12 col-md-3">
			            <h2>HORAIRE D'OUVERTURE</h2>
			            <p>lundi- Samedi : <em>09:00 - 17:00</em>  <br/>
			            dimanche et jours f&eacute;ri&eacute;s : <em>ferm&eacute;</em>
			            </p>
		            </div>
                    <div className="col-12 col-md-3">
			            <h2>NEWSLETTER</h2>
			            <form action="#" >
                            <div className="input-group mb-2 ms-2">
                                <input type="email" className="form-control" placeholder="Entrez votre Email" aria-label="Entrez votre Email"  />
                                <span className="input-group-text" ><img src={logoOndes} alt="ondes" className="iconeBandeau" /></span>
                            </div>
				            <p>Inscrivez-vous pour recevoir les derni&egrave;res offres</p>
			            </form>
		            </div>
                    <div className="col-12 col-md-3">
                        <h2>RESEAUX SOCIAUX</h2>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <img src={logoFB} alt="logo" className="iconeBandeau" />
                        </a>
                        <a href="https://twitter.com/?lang=fr" target="_blank" rel="noreferrer">
                            <img src={logoTWT} alt="logo" className="iconeBandeau" />
                        </a>
                        <a href="https://www.instagram.com/?hl=fr" target="_blank" rel="noreferrer">
                            <img src={logoISG} alt="logo" className="iconeBandeau" />
                        </a>
                        <a href="https://www.googleplus.fr/" target="_blank" rel="noreferrer">
                            <img src={logoGGL} alt="logo" className="iconeBandeau" />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                            <img src={logoYTB} alt="logo" className="iconeBandeau" />
                        </a>
                  </div>
               </div>
                <div className="row border-top"> 
	                <div className="col-12 text-center" id="copyright">
		    	    <p>Copyright &copy; Club Auto - Tous droits r&eacute;serv&eacute;s</p>
		            </div>
                </div>
            </div>
        </footer>
        )
    }
}

export default PiedsDePage