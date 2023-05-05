import { useContext } from 'react';

import CartContext from '../../../context/cart-context';

import MealItemForm from '../MealItemForm/MealItemForm';

import classes from './MealItem.module.css';

const MealItem = (props) => {
    const cartContext = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`

    const handleAdd = (qty) => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            qty: qty
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.desc}</p>
                <p className={classes.price}>{price}</p>
            </div>
            <div>
                <MealItemForm name={props.name} price={props.price} id={props.id} addItem={handleAdd}/>
            </div>
        </li>
    )
}

export default MealItem;