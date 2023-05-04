import { useContext, useEffect, useState } from 'react';

import CartContext from '../../../context/cart-context';

import CartIcon from '../../UI/CartIcon/CartIcon';
import Modal from '../../UI/Modal/Modal';

import classes from './HeaderCartButton.module.css';
import Cart from '../../Cart/Cart/Cart';


const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext);

    console.log(props.items);
    
    useEffect(() => {
        console.log(cartContext.items)
    }, [cartContext]);

    const [clicked, setClicked] = useState(false);

    const size = cartContext.items.length;
    const handleClick = () => {
        setClicked(true);
    }
    const closeModal = () => {
        setClicked(false);
    }
    return (
        <>
            {clicked && (
                <Cart onConfirm={closeModal} />
            )}
            <button onClick={handleClick} className={classes.button}>
                <div className={classes.icon}>
                    <CartIcon />
                </div>
                <label>Your Cart</label>
                <div className={classes.badge}>{size}</div>
            </button>
        </>
        
    );
}

export default HeaderCartButton;