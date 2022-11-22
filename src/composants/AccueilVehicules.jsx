import React from "react"

import "../assets/css/complement.css"
import img3 from "../assets/images/vehicule2.jpg"

class AccueilVehicules extends React.Component {
    render(){

    return (
        <div className="container-fluid  ps-5 pe-5">  
            <div className="row pt-5 pb-4 souligneVehicule">
                <h1 className="text-center">VEHICULES RECENTS</h1>
            </div>

            <div className="row d-flex flex-row justify-content-between pt-3">
               
                <article className="col-12 col-md-4">
                    <a href="./detailVehicule" className="txt-blanc desactiveSousLigne">
                        <div >                      
                            <img src={img3} alt="offre vehicule1" className="img-fluid"/>
                        </div>
                        <section className="blocDescription">
                            <div className="row">                           
                                <div className="col-12 col-md-8"> 
                                    <p>BMW 535I, NAVI, Cuir, ABS</p>
                                </div>
                                <div className="col-3 col-md-4"> 
                                    <p className="prix">5 500&euro;</p>
                                </div>
                            </div>
                            <div className="blocLigneFin">
                            </div>
                        </section>
                    </a>
                </article >

                <article className="d-none d-md-block col-md-4">
                    <a href="./detailVehicule" className="txt-blanc desactiveSousLigne">
                        <img src={img3} alt="offre vehicule2" className="img-fluid"/>
                        <section className="blocDescription">
                            <div className="row">   
                                <div className="col-12 col-md-8"> 
                                    <p>BMW 328I, Sport, Kit carrosserie</p>
                                </div>
                                <div className="col-3 col-md-4"> 
                                    <p className="prix">8 000&euro;</p>
                                </div>
                            </div> 
                            <div className="blocLigneFin">
                            </div>   
                        </section>
                    </a>
                </article>

                <article className="d-none d-md-block col-md-4">
                    <a href="./detailVehicule" className=" txt-blanc desactiveSousLigne">
                        <img src={img3} alt="offre vehicule2" className="img-fluid"/>
                        <section className="blocDescription">
                            <div className="row">
                                <div className="col-12 col-md-8"> 
                                  <p>Ford Explorer 2015, 4WD</p>
                                </div>
                                <div className="col-3 col-md-4"> 
                                    <div className="prixBarre">9 000&euro;</div>
                                    <p className="prix">8 200&euro;</p>
                                </div>
                            </div>
                            <div className="blocLigneFin">
                            </div>
                        </section>
                    </a>
                </article>
            
            </div>
        </div>
      )
    }
} 
export default AccueilVehicules