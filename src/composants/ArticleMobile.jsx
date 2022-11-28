import React from "react"
import "../assets/css/complement.css" 
import img1 from "../assets/images/vehicule2.webp"

class ArticleMobile extends React.Component {
  render(){
    return (
      <div>
         <div className="pe-2 ps-2 pt-2">
            <img src={img1}  alt="voiture" className="img-fluid"/>
         </div>
         <div className="row flex-column align-items-end pe-4">
           <p className="prixMobile">5 000&euro;</p>
         </div>
         <div>
           <h2 className="fs-1">BMW 535i, Navi, Leather, ABS </h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eligendi accusamus incidunt impedit est provident dolore esse officiis tempore, doloribus adipisci debitis molestiae molestias odio voluptatum iure aliquam nisi voluptas?</p>
         </div>
         <div className="separateur">
           <p>
             <a href="/pages/detailVehicule.html">
              &gt;&gt;&gt; En Savoir Plus &lt;&lt;&lt;
             </a>
           </p>
         </div>
      </div>
    )
  }
}

  export default ArticleMobile