import classes from './CartItem.module.css';

const CartItem = (props) => {
    return (
        <div className={classes['cart-item']}>
            <div className={classes.summary}>
                <h2>{props.name}</h2>
                <h4 className={classes.price}>${props.price}</h4>
                <h4 className={classes.amount}>x{props.qty}</h4>
            </div>
            <div className={classes.actions}>
                <button>-</button>
                <button>+</button>
            </div>
        </div>
    )
}

export default CartItem;