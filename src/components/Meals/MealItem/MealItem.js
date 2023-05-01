import MealItemForm from '../MealItemForm/MealItemForm';
import classes from './MealItem.module.css';

const MealItem = (props) => {
    return (
        <div className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.desc}</p>
                <p className={classes.price}>{props.price}</p>
            </div>
            <MealItemForm name={props.name} price={props.price} />
        </div>
    )
}

export default MealItem;