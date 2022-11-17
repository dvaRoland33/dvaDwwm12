import React from 'react';
import "../assets/css/complement.css";

class MenuBar extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }
    render() {
        return(         
            <div className='d-block menuConteneur' >
         
            <nav id="menuBar">
                <div className='menuBar'>
                    <div className="navPave">
                        <a className="navLien" href="/">Accueil</a>
                    </div>  
                    <div className="navPave">
                        <a className="navLien" href="/ventes">Vente</a>
                    </div>  
                    <div className="navPave">
                        <a className="navLien" href="/locations">Location</a>
                    </div>  
                    <div className="navPave">
                        <a className="navLien" href="/contact">Contact</a>
                    </div>                           
                </div>
            </nav>
            </div> 
        )
    }
}

export default MenuBar


