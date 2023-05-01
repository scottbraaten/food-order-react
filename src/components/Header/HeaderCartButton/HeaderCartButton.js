import CartIcon from '../../UI/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
    return (
        <div className={classes.button}>
            <div className={classes.icon}>
                <CartIcon />
            </div>
            <label>Your Cart</label>
            <div className={classes.badge}>0</div>
        </div>
        
    );
}

export default HeaderCartButton;