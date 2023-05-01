import { useState } from 'react';

import CartIcon from '../../UI/CartIcon/CartIcon';

import classes from './HeaderCartButton.module.css';
import Modal from '../../UI/Modal/Modal';

const HeaderCartButton = () => {
    const [clicked, setClicked] = useState(false);
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
                <div className={classes.badge}>0</div>
            </button>
        </>
        
    );
}

export default HeaderCartButton;