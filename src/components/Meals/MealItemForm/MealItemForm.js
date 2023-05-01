import { useState } from 'react';
import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = () => {
    const [qty, setQty] = useState('1');
    const handleAmtChange = (e) => {
        setQty(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className={classes.form}>
            <form onSubmit={handleSubmit}>
                <Input label='Amount' onChange={handleAmtChange} value={qty} />
                <button>+ Add</button>
            </form>
        </div>
    )
}

export default MealItemForm;