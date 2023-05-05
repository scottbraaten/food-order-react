import { useContext } from 'react';

import CartContext from '../../../context/cart-context';

import CartIcon from '../../UI/CartIcon/CartIcon';

import classes from './HeaderCartButton.module.css';


const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext);

    const size = cartContext.items.reduce((curNumber, item) => {
        return curNumber + item.qty;
      }, 0);

    return (
        <>
            <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{size}</span>
            </button>
        </>
        
    );
}

export default HeaderCartButton;