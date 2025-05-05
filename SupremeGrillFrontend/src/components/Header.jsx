import { Link } from "react-router-dom";
import { useBasket } from "../context/BasketContext";

const Header = () => {
  const { basket } = useBasket();
  return (
    <>
      <h1> Supreme Grill</h1>
    </>
  );
};

export default Header;
