import Button from "./Button";
import PizzaImage from "../assets/Pizza.jpg";
import "../styles/Card.css";
import Counter from "./Counter";
import { useContext, useState } from "react";
import { BasketContext, useBasket } from "../context/BasketContext";

const Card = ({ item }) => {
  const { addBasket } = useBasket();
  const [quantity, setQuantity] = useState(0);

  const handleQtyChange = (newQuantity) => {
    console.log("Setting Quantity:", newQuantity);
    setQuantity(newQuantity);
  };

  const handleAddBasket = (item, qty) => {
    console.log("Adding to basket:", item, qty);
    addBasket(item, qty);
  };
  return (
    <div className="card">
      <img
        src={PizzaImage}
        alt="Currently Unavailable"
        className="card-image"
      />
      <h2>{item.itemName}</h2>
      <p>{item.description}</p>
      <p>{item.price}</p>

      <Counter onChange={handleQtyChange} />
      <Button
        label="Add to Basket"
        onClick={() => handleAddBasket(item, quantity)}
      />
    </div>
  );
};
export default Card;
