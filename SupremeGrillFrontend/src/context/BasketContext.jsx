import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

export const BasketContext = createContext();
export const useBasket = () => useContext(BasketContext);
function BasketContextProvider({ children }) {
  const [basket, setBasket] = useState([]);

  const addBasket = (item, quantity) => {
    console.log("Adding to basket2:", item, quantity);
    setBasket((prevBasket) => [...prevBasket, { item, quantity }]);
  };

  const removeBasket = (itemId) => {
    setBasket((prevBasket) =>
      prevBasket.filter((basketItem) => basketItem.item.itemID !== itemId)
    );
  };

  const clearBasket = () => {
    setBasket([]);
  };
  return (
    <BasketContext.Provider
      value={{ basket, removeBasket, addBasket, clearBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export default BasketContextProvider;
