import { useContext, useState } from "react";

import CartContext from "../../../context/cart-context";

import CartItem from "../CartItem/CartItem";
import Modal from "../../UI/Modal/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const [ordering, setOrdering] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (item) => {
    cartContext.removeItem(item);
  };
  const cartItemAddHandler = (item) => {
    cartContext.addItem(item);
  };

  const handleOrderClick = (e) => {
    setOrdering(true);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    const order = {
      name: name,
      email: email,
      meals: cartContext.items,
    };

    const response = await fetch(
      "https://react-http-ec3e5-default-rtdb.firebaseio.com/meals.json",
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
  };

  const getMeals = async () => {
    const response = await fetch(
      "https://react-http-ec3e5-default-rtdb.firebaseio.com/meals.json"
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    console.log(data);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            qty={item.qty}
            onRemove={cartItemRemoveHandler.bind(null, item)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  let content = ordering ? (
    <>
      <form onSubmit={handleOrderSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={handleNameChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <button type="submit">Order</button>
        <button
          type="button"
          onClick={getMeals}
        >
          Get Meals
        </button>
      </form>
    </>
  ) : (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onClose}
        >
          Close
        </button>
        {hasItems && (
          <button
            className={classes.button}
            onClick={handleOrderClick}
          >
            Order
          </button>
        )}
      </div>
    </>
  );

  return <Modal onClose={props.onClose}>{content}</Modal>;
};

export default Cart;
