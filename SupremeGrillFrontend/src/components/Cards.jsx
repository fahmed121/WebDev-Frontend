import { Button } from "bootstrap";
import PizzaImage from "../assets/Pizza.jpg";
import "../styles/Card.css";
import Counter from "./Counter";
import { useState } from "react";

const Card = ({ title, description, cost }) => {
  console.log(title, description, cost);

  return (
    <div className="card">
      <img
        src={PizzaImage}
        alt="Currently Unavailable"
        className="card-image"
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{cost}</p>
      <Counter />
      <input type="submit" className="submit-button" value="Submit" />
    </div>
  );
};
export default Card;
