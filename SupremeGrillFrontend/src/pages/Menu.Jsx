import CardContainer from "../components/CardContainer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useBasket } from "../context/BasketContext";
import { UseAuth } from "../context/AuthContext";
const Menu = () => {
  const [item, setItem] = useState([]);
  const { addBasket } = useBasket();
  const [newItem, setNewItem] = useState({
    itemName: "",
    description: "",
    price: 0,
  });
  const apiURL = import.meta.env.VITE_BACKEND_API_URL;
  const { user } = UseAuth();
  useEffect(() => {
    axios
      .get(`${apiURL}/items`)
      .then((response) => {
        console.log("API response:", response.data);
        setItem(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  {
    user?.role === "Admin" && (
      <button onClick={handleCreate}>Create Menu Item</button>
    );
  }

  const handleSubmit = (item, quantity) => {
    event.preventDefault();
    console.log("Quantity", quantity);
    addBasket(item, quantity);
    console.log("TestQuantity", quantity);
  };
  const handleCreate = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(`${apiURL}/menu`, newItem, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Created");
      fetchMenu();
    } catch (err) {
      alert("failed");
      console.error(err);
    }
  };

  return (
    <div className="menu">
      <h2>Menu</h2>
      <CardContainer item={item} onqtyChange={handleSubmit} />
      {user?.role === "Admin" && (
        <div style={{ marginTop: "20px" }}>
          <h2>Add New Menu Item</h2>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) =>
              setNewItem({ ...newItem, itemName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) =>
              setNewItem({ ...newItem, description: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Price"
            onChange={(e) =>
              setNewItem({ ...newItem, price: parseFloat(e.target.value) })
            }
          />
          <button onClick={handleCreate}>Create</button>
        </div>
      )}
    </div>
  );
};

export default Menu;
