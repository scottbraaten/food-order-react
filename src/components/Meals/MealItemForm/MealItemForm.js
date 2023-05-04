import { useContext, useState } from 'react';
import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../context/cart-context';

const MealItemForm = (props) => {
    const [qty, setQty] = useState('1');

    const cartContext = useContext(CartContext);

    const handleAmtChange = (e) => {
        setQty(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!cartContext.items.find((item) => item.name === item.price)) {
            cartContext.items.push(
                {
                    name: props.name,
                    price: props.price,
                    qty: qty
                }
            );
        } else {
            cartContext.items[cartContext.items.findIndex((a) => a.name === props.name)].qty += qty;
        }

    }
    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <Input label='Amount' input={{
                onChange: handleAmtChange,
                id: props.id + 'amount',
                step: '1',
                defaultValue: '1'
            }} />
            <button type='submit'>+ Add</button>
        </form>
    )
}

export default MealItemForm;