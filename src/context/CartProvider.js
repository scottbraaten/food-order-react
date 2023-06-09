import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const item = state.items.find((item) => item.id === action.item.id);

    if (item) {
      const qty = item.qty + action.item.qty;
      const updatedItems = state.items.filter(
        (item) => item.id !== action.item.id
      );
      const finalItems = [...updatedItems, { ...item, qty: qty }];
      finalItems.sort((a, b) => a.qty - b.qty);
      const updatedTotalAmount = state.totalAmount + item.price;
      return {
        items: finalItems,
        totalAmount: updatedTotalAmount,
      };
    }

    const updatedItems = state.items.concat(action.item);
    updatedItems.sort((a, b) => a.qty - b.qty);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.qty;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    if (action.item.qty > 1) {
      const qty = action.item.qty - 1;
      const updatedItems = state.items.filter(
        (item) => item.id !== action.item.id
      );
      const finalItems = [...updatedItems, { ...action.item, qty: qty }];
      finalItems.sort((a, b) => a.qty - b.qty);
      const updatedTotalAmount = state.totalAmount - action.item.price;

      return {
        items: finalItems,
        totalAmount: updatedTotalAmount,
      };
    }

    const updatedItems = state.items.filter(
      (item) => item.id !== action.item.id
    );
    const updatedTotalAmount =
      state.totalAmount - action.item.price * action.item.qty;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "CLEAR") {
    return {
      items: [],
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItem = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const removeItem = (item) => {
    dispatch({ type: "REMOVE", item: item });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
    clearCart: clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
