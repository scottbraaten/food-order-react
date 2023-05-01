import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import classes from './MealsList.module.css';

const MealsList = (props) => {
    return(
        <Card className={classes.meals}>
            <ul>
                {props.meals.map((meal) => {
                    return (
                        <MealItem key={Math.random()}
                            name={meal.name}
                            desc={meal.description}
                            price={meal.price}
                        />
                    )
                })}
            </ul>
        </Card>
    )
}

export default MealsList;