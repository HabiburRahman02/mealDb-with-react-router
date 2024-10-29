

const Modal = ({ showModal, handleClosedModal, meal }) => {
    const { strMeal, strMealThumb, strMeasure5 } = meal;

    return (
        <div>
            {
                showModal && <dialog id="my_modal_1" className="modal modal-open">
                    <div className="modal-box">
                        <img className="h-72 object-cover w-full" src={strMealThumb} alt="" />
                        <h3 className="font-bold text-lg">{strMeal}!</h3>
                        <p className="py-4">Weight: {strMeasure5}</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button onClick={handleClosedModal} className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            }
        </div>
    );
};

export default Modal;