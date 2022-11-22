import React from 'react'
import "../assets/css/complement.css"

class MenuBar extends React.Component {
    showSettings (event) {
        event.preventDefault()
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
                        <a className="navLien" href="../pages/ventes.html">Vente</a>
                    </div>  
                    <div className="navPave">
                        <a className="navLien" href="../pages/location.html">Location</a>
                    </div>  
                    <div className="navPave">
                        <a className="navLien" href="../pages/contact.html">Contact</a>
                    </div>                           
                </div>
            </nav>
            </div> 
        )
    }
}

export default MenuBar


