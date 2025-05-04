import { useCallback } from "react";
import { createContext } from "react";

interface IOrderItemsContext {
  orderItems: IOrderItems[];
  setOrderItems: (orderItems: IOrderItems[]) => void;
}
const orderItemsContext =
  createContext <
  IOrderItemsContext >
  {
    orderItems: [],
    setOrderItems: () => {},
  };
