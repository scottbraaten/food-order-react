import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import classes from "./MealsList.module.css";

const MealsList = (props) => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {props.meals.map((meal) => {
            return (
              <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                desc={meal.description}
                price={meal.price}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default MealsList;
