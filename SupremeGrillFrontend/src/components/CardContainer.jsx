import Card from "./Cards";
import Counter from "./Counter";

const CardContainer = ({ item }) => {
  return (
    <div className="card-container">
      {/* {item.map((item) => (
        <Counter key={item.id} item={item} />
      ))}   */}
      <Card />
    </div>
  );
};

export default CardContainer;
