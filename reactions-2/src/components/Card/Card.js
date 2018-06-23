import React from "react";
import "./Card.css";


const Card = props => (
  <div className="card">
    <div className="img-container">
   
    <img src={props.image}></img>

//  {props.count}
//     onClick={props.handleIncrement}

    </div>  
  </div>
);

export default Card;

