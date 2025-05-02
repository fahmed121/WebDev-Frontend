import Card from "./Cards";
import "../styles/CardContainer.css";

const CardContainer = ({ item }) => {
  return (
    <div className="card-container">
      {/* {item.map((item) => (
        <Counter key={item.id} item={item} />
      ))}   */}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardContainer;
