import { useState } from "react";
import Modal from "./Modal";

const Meal = ({ meal }) => {
    const { strMeal, strMealThumb, strMeasure5 } = meal;
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleClosedModal = () => {
        setShowModal(false);
    }

    return (
        <div className="card bg-base-100 shadow-md hover:shadow-2xl">
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
                {/* <Link to={`/meal/${idMeal}`}> */}
                <button onClick={handleShowModal} className="btn w-full">Meal Details</button>
                {/* </Link> */}
            </div>
            <Modal meal={meal} showModal={showModal} handleClosedModal={handleClosedModal}></Modal>

        </div>
    );
};

export default Meal;