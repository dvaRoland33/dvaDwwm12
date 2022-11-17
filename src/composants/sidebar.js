import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './sidebar.css';

export default props => {
  return (
    <Menu {...props} >
      <a className="menu-item" href="/">
        Accueil
      </a>

      <a className="menu-item" href="/Ventes">
        Ventes
      </a>

      <a className="menu-item" href="/Locations">
        Locations
      </a>

      <a className="menu-item" href="/contact">
        Contacts
      </a>
    </Menu>
  );
};


