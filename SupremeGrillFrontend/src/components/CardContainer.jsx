import Card from "./Cards";
import "../styles/CardContainer.css";
import PizzaImage from "../assets/Pizza.jpg";

const CardContainer = ({ item, onqtyChange }) => {
  return (
    <div className="card-container">
      {item.length > 0 ? (
        item.map((item) => (
          <Card key={item.ItemId} item={item} onqtyChange={onqtyChange} />
        ))
      ) : (
        <p> Nothing Available </p>
      )}
    </div>
  );
};

export default CardContainer;
