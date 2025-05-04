import Card from "./Cards";
import "../styles/CardContainer.css";
import PizzaImage from "../assets/Pizza.jpg";

const CardContainer = ({ item }) => {
  return (
    <div className="card-container">
      {item.length > 0 ? (
        item.map((item) => (
          <Card
            key={item.ItemId}
            title={item.itemName}
            description=""
            cost={item.price}
            image={PizzaImage}
          />
        ))
      ) : (
        <p> Nothing Available </p>
      )}
    </div>
  );
};

export default CardContainer;
