
const Meal = ({ meal }) => {
    const { strMeal, strMealThumb, strMeasure5 } = meal
    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl">
            <figure>
                <img
                    className="h-72 object-cover w-full"
                    src={strMealThumb}
                    alt="Shoes" />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title">
                    {strMeal}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Weight: {strMeasure5}</p>
                <button className="btn w-full">Meal Details</button>
            </div>
        </div>
    );
};

export default Meal;