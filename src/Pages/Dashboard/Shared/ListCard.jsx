/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const ListCard = ({ task }) => {
    return (
        <div className="bg-white rounded-lg p-4 w-80">
            <div className="flex gap-2 items-baseline">
                <input type="checkbox" name="action" id="action" />
                <div className="desc">
                    <h2 className="font-bold text-xl text-blue-600 capitalize">{task.title}</h2>
                    <p className="font-medium mt-2">{task.description}</p>

                    <div className="flex gap-2 items-center">
                        <h6 className="capitalize bg-gray-100 w-fit px-2 py-1 text-sm text-blue-700 rounded-md mt-2">{task.priority}</h6>

                        <h4 className="mt-2 text-sm text-slate-500">{task.deadline}</h4>
                    </div>
                </div>
                <div>
                    <button></button>
                    <button></button>
                </div>
            </div>


        </div>
    );
};

export default ListCard;