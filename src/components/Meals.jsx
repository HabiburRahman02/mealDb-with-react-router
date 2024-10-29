import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";

const Meals = () => {
    const meals = useLoaderData();
    // console.log(meals.meals);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                meals.meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
            }
        </div>
    );
};

export default Meals;