import React from 'react';

class MenuBar extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }
    render() {
        return(         
            <div className='d-block pe-0 ps-0' >
         
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarRightAlignExample">
      
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/ventes">Ventes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/locations">Locations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div> 
        )
    }
}

export default MenuBar


