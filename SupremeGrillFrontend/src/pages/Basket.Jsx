import { BasketContext, useBasket } from "../context/BasketContext";
import { useState } from "react";
import Button from "../components/Button";
const Basket = () => {
  const { basket, removeBasket, addBasket } = useBasket();
  const [total, setTotal] = useState(0);
  const calTotalPrice = () => {
    const totalPrice = basket.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
      setTotal(totalPrice)
    );

    const handleRemoveItems = (itemId) => {
      removeBasket(itemId);
      calTotalPrice();
    };

    React.useEffect(() => {
      calculateTotal();
    }, [basket]);
  };
  return (
    <div>
      <h2>Your Basket</h2>
      <div>
        {basket.length === 0 ? (
          <p> Empty Basket</p>
        ) : (
          basket.map((basketItem, index) => (
            <div>
              <h3>{basketItem.item.itemName}</h3>
              <p>{basketItem.item.description}</p>
              <p>Price: £ {basketItem.item.price}</p>
              <p>Quantity: {basketItem.quantity}</p>
              <p>Subtotal: £ {basketItem.item.price * basketItem.quantity}</p>

              <Button
                label="Remove"
                onClick={() => removeBasket(basketItem.item.id)}
              />
              <div>
                <h3> Total price: £ {calTotalPrice}</h3>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Basket;
