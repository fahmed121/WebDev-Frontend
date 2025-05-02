import PizzaImage from "../assets/Pizza.jpg";
import "../styles/Card.css";
import Counter from "./Counter";

const Card = ({ title, Description, cost }) => {
  const handleClick = () => {};
  return (
    <div className="card">
      <img
        src={PizzaImage}
        alt="Currently Unavailable"
        className="card-image"
      />
      <h2>{title}</h2>
      <p>{Description}</p>
      <p>{cost}</p>
      <Counter />
    </div>
  );
};
export default Card;
