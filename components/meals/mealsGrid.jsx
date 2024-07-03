import classes from "@/styles/components/meals/mealsGrid.module.css";
import MealItem from "./mealItem";

const MealsGrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        )
      })}
    </ul>
  );
};

export default MealsGrid;
