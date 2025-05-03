import CardContainer from "../components/CardContainer";
import Card from "../components/Cards";
import axios from "axios";
import { useState, useEffect } from "react";
import PizzaImage from "../assets/Pizza.jpg";

const Menu = () => {
  const [item, setItem] = useState([]);
  const apiURL = import.meta.env.VITE_BACKEND_API_URL;

  useEffect(() => {
    axios
      .get(`${apiURL}/items`)
      .then((response) => {
        console.log("API response:", response.data);
        setItem(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="menu">
      <h2>Menu</h2>
      <CardContainer item={item} />
    </div>
  );
};

export default Menu;
