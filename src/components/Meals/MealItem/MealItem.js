import MealItemForm from '../MealItemForm/MealItemForm';
import classes from './MealItem.module.css';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.desc}</p>
                <p className={classes.price}>{price}</p>
            </div>
            <div>
                <MealItemForm name={props.name} price={props.price} id={props.id}/>
            </div>
        </li>
    )
}

export default MealItem;