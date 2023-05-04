import HeaderCartButton from './HeaderCartButton/HeaderCartButton';

import classes from './Header.module.css';
import meals from '../../assets/meals.jpg';
import { useContext } from 'react';
import CartContext from '../../context/cart-context';

const Header = props => {
    const cartContext = useContext(CartContext);
    return (
        <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton items={cartContext.items} />
        </header>
        <div className={classes['main-image']}>
            <img src={meals} alt="Food table" />
        </div>
        </>
    )
}

export default Header;