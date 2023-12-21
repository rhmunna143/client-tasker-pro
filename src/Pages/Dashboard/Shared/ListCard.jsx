/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import swal from "sweetalert";
import axios from "axios";
import toast from "react-hot-toast";
import useAllTasks from "../../../Hooks/useAllTasks";
import UpdateField from "../UpdateTask/UpdateField";


const ListCard = ({ task }) => {
    const { refetch } = useAllTasks();

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover your Task",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`http://localhost:3000/api/tasks/${id}`)
                        .then(res => {
                            if (res.data._id) {
                                refetch()

                                swal("Your Task has been deleted!", {
                                    icon: "success",
                                });
                            }

                        })
                        .catch(err => {
                            console.log(err);
                            toast.error(err.message);
                        })


                } else {
                    swal("Your Task is safe!");
                }
            });
    }

    return (
        <div className="bg-white rounded-lg p-4 w-80 md:w-[440px] lg:w-[580px] mx-auto">
            <div className="flex gap-4 items-baseline justify-between">
                <input className="" type="checkbox" name="action" id="action" />
                <div className="desc flex-1">
                    <h2 className="font-bold text-xl text-blue-600 capitalize">{task.title}</h2>
                    <p className="font-medium mt-2">{task.description}</p>

                    <div className="flex gap-2 items-center">
                        <h6 className="capitalize bg-gray-100 w-fit px-2 py-1 text-sm text-blue-700 rounded-md mt-2">{task.priority}</h6>

                        <h4 className="mt-2 text-sm text-slate-500">{task.deadline}</h4>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <button onClick={() => document.getElementById(`${task._id}`).showModal()} className="btn btn-danger text-blue-700 font-medium btn-xs"><FaRegEdit /></button>
                    <button onClick={() => handleDelete(task._id)} className="btn btn-danger text-red-700 font-medium btn-xs"><MdDeleteOutline /></button>
                </div>
            </div>

            {/* modal codes */}

            <dialog id={`${task._id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center">
                    <h3 className="font-bold text-xl text-center mb-4">Update Task</h3>
                    <UpdateField task={task} />

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default ListCard;