import React from "react"
import img1 from "../assets/images/vehicule2.webp"

class DetailVehiculeEtendu extends React.Component {
    render(){
    return (
      <div>
        <div>
           <p>ACCUEIL / VENTE / 
               BMW 535i, NAVI, LEATHER, ABS
           </p>
        </div>
        <div>
           BMW 535i, NAVI, LEATHER, ABS
        </div>
        <div>
          <img src={img1} alt="annonce" className="img-fluid"/>
        </div>
        <div>
            <ul class="nav flex-row">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#description">Description</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#technique">Technique</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#options">Options</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href='/contact'>Contact</a>
                </li>
            </ul>
        </div>
        <div>
            <p id="description">DESCRIPTION Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eligendi accusamus incidunt impedit est provident dolore esse officiis tempore, doloribus adipisci debitis molestiae molestias odio voluptatum iure aliquam nisi voluptas?</p>                       
			<p id="technique">TECHNIQUE Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eligendi accusamus incidunt impedit est provident dolore esse officiis tempore, doloribus adipisci debitis molestiae molestias odio voluptatum iure aliquam nisi voluptas?</p>                       
			<aside >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eligendi accusamus incidunt impedit est provident dolore esse officiis tempore, doloribus adipisci debitis molestiae molestias odio voluptatum iure aliquam nisi voluptas?</p>                       			             
            </aside>  
            <div id="options">
                <h4>OPTIONS</h4>
                <ul>
                    <li> option1</li>
                    <li> option2</li>
                    <li> option3</li>
                    <li> option4 </li>
                </ul>
            
            </div>                                 
            
        </div>

      </div>
    )
  }
  }

  export default DetailVehiculeEtendu 