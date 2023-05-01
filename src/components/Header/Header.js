import HeaderCartButton from './HeaderCartButton/HeaderCartButton';

import classes from './Header.module.css';
import meals from '../../assets/meals.jpg';

const Header = props => {
    return (
        <>
        <div className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
        </div>
        <img src={meals} className={classes['main-image']} />
        </>
    )
}

export default Header;