import React from "react"

import img1 from "/src/assets/images/clients.webp"
import img2 from "/src/assets/images/entretien.webp"

import "../assets/css/complement.css"

class AccueilBienvenue extends React.Component {
    render(){

    return (
        <div className="pe-4 ps-4 py-5">  
            <article className="row d-flex">
			      <div className="col-12 col-md-6">
				      <img src={img1} alt="clients" className="img-fluid"/>
			      </div>
			      <div className="col-12 col-md-6">
		  		    <h1>BIENVENUE CHEZ <strong className="txt-orange"> CLUB AUTO</strong> </h1>
		    		    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, magni?</h3>
				    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eligendi accusamus incidunt impedit est provident dolore esse officiis tempore, doloribus adipisci debitis molestiae molestias odio voluptatum iure aliquam nisi voluptas?</p>                       
			      </div>
		      </article>
        
          <article className="row d-flex">
			      <div className="col-12 col-md-6" id="presentation">
				      <h2>LE MEILLEUR DE L'AUTOMOBILE</h2>
				      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quam, eos et, suscipit corporis excepturi placeat exercitationem quisquam eligendi consequatur maxime adipisci quae optio totam laboriosam alias quod culpa, ab neque corrupti aliquam fugiat? Et consectetur pariatur, veritatis eveniet, accusantium veniam optio fugit natus nostrum voluptatibus quod, reprehenderit rerum iste!</p>
				      <ul>
					    <li>Lorem ipsum dolor sit amet. </li>
					    <li>Lorem ipsum dolor sit amet. </li>
					    <li>Lorem ipsum dolor sit amet. </li>
	  				    <li>Lorem ipsum dolor sit amet. </li>
  					    <li>Lorem ipsum dolor sit amet. </li>
	  			    </ul>
		  	    </div>
		  	    <div className="col-12 col-md-6">
		  		    <img src={img2} alt="entretien" className="img-fluid" />
	  		    </div>
	  	    </article> 
        </div>
      )
    }
} 
export default AccueilBienvenue