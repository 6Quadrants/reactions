import React from "react";
// import CardBtn from "../CardBtn";
import "./Card.css";

// const Card = () => (

{/* <div className="card">
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}

const Card = props => (
  <div className="card">
      <img src={props.image} />
    
  </div>
);

export default Card;
