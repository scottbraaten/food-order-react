import { useRef } from 'react';
import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const amountRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const amount = +amountRef.current.value;
        props.addItem(amount);
    }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <Input label='Amount' input={{
                id: props.id + 'amount',
                type: 'number',
                step: '1',
                defaultValue: '1'
            }} ref={amountRef} />
            <button type='submit'>+ Add</button>
        </form>
    )
}

export default MealItemForm;