import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
    const meal = useLoaderData();
    console.log(meal.meals[0]);
    const { strMeal, strMealThumb, strMeasure5 } = meal.meals[0];
    return (
        <div>
            <h5 className="text-4xl">{strMeal}</h5>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}

        </div>
    );
};

export default MealDetails;