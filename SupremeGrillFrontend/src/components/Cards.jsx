import PizzaImage from "../assets/Pizza.jpg";
import "../styles/Card.css";
import Counter from "./Counter";

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
    </div>
  );
};
export default Card;
