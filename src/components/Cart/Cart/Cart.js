import { useContext, useState } from "react";

import CartContext from "../../../context/cart-context";

import CartItem from "../CartItem/CartItem";
import Modal from "../../UI/Modal/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const [ordering, setOrdering] = useState(false);
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [formValid, setFormValid] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalAmount = `$${
    cartContext.totalAmount ? cartContext.totalAmount.toFixed(2) : "$0"
  }`;
  const hasItems = cartContext.items.length > 0;

  const validate = (order) => {
    if (order.name.trim() === "") {
      return false;
    }
    if (order.street.trim() === "") {
      return false;
    }
    if (order.zip.trim() === "") {
      return false;
    }
    if (order.city.trim() === "") {
      return false;
    }
    return true;
  };

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

  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };

  const handleZipChange = (e) => {
    setZip(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    const order = {
      name: name,
      street: street,
      zip: zip,
      city: city,
      meals: cartContext.items,
    };

    if (!validate(order)) {
      setFormValid(false);
      return false;
    }

    const post = async () => {
      setSubmitting(true);
      const response = await fetch(
        "https://react-http-ec3e5-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(order),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSubmitting(false);
      setSubmitted(true);
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    };
    post();
    cartContext.clearCart();
  };

  // const getMeals = async () => {
  //   const response = await fetch(
  //     "https://react-http-ec3e5-default-rtdb.firebaseio.com/meals.json"
  //   );

  //   if (!response.ok) {
  //     throw new Error("Something went wrong!");
  //   }

  //   const data = await response.json();
  //   console.log(data);
  // };

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
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={handleNameChange}
            value={name}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            onChange={handleStreetChange}
            value={street}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="zip-code">Zip Code</label>
          <input
            type="text"
            id="zip-code"
            onChange={handleZipChange}
            value={zip}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            onChange={handleCityChange}
            value={city}
          />
        </div>
        <button
          className={classes["button--alt"]}
          onClick={props.onClose}
        >
          Close
        </button>
        <button type="submit">Confirm</button>
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

  const contentSubmitting = <p>Sending order data</p>;

  const contentSubmitted = <p>Success!</p>;

  return (
    <Modal onClose={props.onClose}>
      {submitting ? contentSubmitting : submitted ? null : content}
      {submitted && contentSubmitted}
    </Modal>
  );
};

export default Cart;
