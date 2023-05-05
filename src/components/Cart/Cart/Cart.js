import { useContext } from "react";

import CartContext from "../../../context/cart-context";

import CartItem from "../CartItem/CartItem";
import Modal from "../../UI/Modal/Modal";

import classes from './Cart.module.css';


const Cart = (props) => {
    const cartContext = useContext(CartContext);

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = (item) => {
        cartContext.removeItem(item);
    };
    const cartItemAddHandler = (item) => {
        cartContext.addItem(item);
    };

    const cartItems = <ul className={classes['cart-items']}>
        {cartContext.items.map((item) => {
            return (
                <CartItem key={item.id} name={item.name} price={item.price} qty={item.qty} onRemove={cartItemRemoveHandler.bind(null, item)}
                onAdd={cartItemAddHandler.bind(null, item)}/>
            )
        })}
    </ul>;

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>
                Close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;