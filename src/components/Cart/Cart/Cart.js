import { useContext } from "react";

import CartContext from "../../../context/cart-context";

import CartItem from "../CartItem/CartItem";

import classes from './Cart.module.css';

const Cart = (props) => {
    const cartContext = useContext(CartContext);

    const calculateSum = cartContext.items.reduce((sum, item) => sum + item.price * item.qty, 0);

    let content = cartContext.items.length > 0 ?
        (<><div className={classes['cart-items']}>{cartContext.items.map((item) => {
            return (
                <CartItem key={Math.random()} name={item.name} price={item.price} qty={item.qty}/>
            )
        })}</div>
        <div className={classes.total}>
        <h2>Total Amount</h2>
        <h2>{calculateSum}</h2>
        </div>
        <div className={classes.actions}>
        <button onClick={props.close}>Close</button> <button>Order</button>
        </div>
        </>) : (
            <>
                <h1>No items in cart.</h1>
                <button onClick={props.close}>Close</button>
            </>
        )

    return (
        <div>
            {content}
        </div>
    )
}

export default Cart;