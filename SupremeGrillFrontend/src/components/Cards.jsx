import PizzaImage from "../assets/Pizza.jpg";
import "../styles/Card.css";
import Button from "./Button";
import Counter from "./Counter";

const Card = () => {
  const handleClick = () => {};
  return (
    <div className="card">
      <img
        src={PizzaImage}
        alt="Currently Unavailable"
        className="card-image"
      />
      <h2>Chicken Pizza</h2>
      <p>made of cheese and stuff</p>

      <Counter />
    </div>
  );
};
export default Card;
