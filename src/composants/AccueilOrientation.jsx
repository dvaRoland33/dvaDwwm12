import React from "react"
import "../assets/css/complement.css"

class AccueilOrientation extends React.Component {
    render(){

    return (
      <div className="container fondOrientation pt-5 ">  
      <div className="row align-item-center justify-content-center mb-5">
        <div className="col-12 p-5 col-md-5 me-md-2 p-md-3 bkg-orangeflou " >
			      <h2><strong>Vous souhaitez louer ?</strong></h2>
			      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quisquam perspiciatis ipsam in enim amet iusto. Est iste veniam ratione voluptates dolore quam amet voluptatem. Laborum laboriosam quibusdam itaque consequuntur. </p>
		      </div>
		      <div className="col-12 p-5 col-md-5 ms-md-2 p-md-3 bkg-roseflou" >
			      <h2><strong>Vous souhaitez acheter ?</strong></h2>
			      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est suscipit itaque laudantium ipsa quisquam delectus, quaerat accusantium magnam deserunt atque ducimus alias fuga. Ad dolor, libero nulla vel veritatis nam deleniti, eum ex quaerat culpa, optio exercitationem sequi odio in.</p>
		      </div>
        </div>
      </div>  
      )
    }
} 
export default AccueilOrientation