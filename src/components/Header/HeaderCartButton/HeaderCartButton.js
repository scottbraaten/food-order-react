import { useContext, useState } from 'react';

import CartContext from '../../../context/cart-context';

import CartIcon from '../../UI/CartIcon/CartIcon';
import Modal from '../../UI/Modal/Modal';

import classes from './HeaderCartButton.module.css';


const HeaderCartButton = () => {
    const cartContext = useContext(CartContext);

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
                <Modal onConfirm={closeModal} />
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