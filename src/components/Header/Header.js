import HeaderCartButton from './HeaderCartButton/HeaderCartButton';

import classes from './Header.module.css';
import meals from '../../assets/meals.jpg';

const Header = props => {
    return (
        <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={meals} alt="Food table" />
        </div>
        </>
    )
}

export default Header;