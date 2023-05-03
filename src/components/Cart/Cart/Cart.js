import { useContext } from "react";

import CartContext from "../../../context/cart-context";

import CartItem from "../CartItem/CartItem";
import Modal from "../../UI/Modal/Modal";

import classes from './Cart.module.css';


const Cart = (props) => {
    const cartContext = useContext(CartContext);

    const cartItems = <ul className={classes['cart-items']}>{cartContext.items.map((item) => {
        return (
            <CartItem key={Math.random()} name={item.name} price={item.price} qty={item.qty}/>
        )
    })}</ul>;

    const calculateSum = cartContext.items.reduce((sum, item) => sum + item.price * item.qty, 0);

    let content = cartContext.items.length > 0 ?
        (
            <Modal onConfirm={props.onConfirm}>
                {cartItems}
                <div className={classes.total}>
                    <h2>Total Amount</h2>
                    <h2>{calculateSum}</h2>
                </div>
                <div className={classes.actions}>
                    <button onClick={props.onConfirm} className={classes['button--alt']}>Close</button>
                    <button className={classes.button}>Order</button>
                </div>
            </Modal>
        ) : (
            <Modal onConfirm={props.onConfirm}>
                <h1>No items in cart.</h1>
                <button onClick={props.onConfirm}>Close</button>
            </Modal>
        )

    return content;
}

export default Cart;