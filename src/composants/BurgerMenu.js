import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './sidebar.css';
import icon from "../assets/images/hamburger.png";

class BurgerMenu extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }
    render() {
        return(          
            <Menu customBurgerIcon={ <img src={icon} alt="burger menu"/> }>
                <a className="menu-item" href='/'>Accueil</a>
                <a className="menu-item" href='/ventes/'>Ventes</a>
                <a className="menu-item" href='/locations/'>Locations</a>
                <a className="menu-item" href='/contact/'>Contact</a>
            </Menu>  
        )
    }
}

export default BurgerMenu


