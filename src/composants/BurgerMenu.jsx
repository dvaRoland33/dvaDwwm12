import React from 'react'
import { elastic as Menu } from 'react-burger-menu'
import './sidebar.css'
import icon from "../assets/images/hamburger.svg"

class BurgerMenu extends React.Component {
    showSettings (event) {
        event.preventDefault()
    }
    render() {
        return(          
            <Menu customBurgerIcon={ <img src={icon} alt="burger menu"/> }>
                <a className="menu-item" href='/'>Accueil</a>
                <a className="menu-item" href='../pages/ventes.html'>Ventes</a>
                <a className="menu-item" href='../pages/location.html'>Locations</a>
                <a className="menu-item" href='../pages/contact.html'>Contact</a>
            </Menu>  
        )
    }
}

export default BurgerMenu


