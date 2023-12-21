import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AllContextProvider } from "../../../AllContext/AllContext";
import axios from "axios";
import toast from "react-hot-toast";
import useAllTasks from "../../../Hooks/useAllTasks";

const InputField = () => {
    const [priority, setPriority] = useState("");
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AllContextProvider)
    const { refetch } = useAllTasks()

    const uid = user.uid;
    const status = "to-do";

    const onSubmit = (data) => {
        const send = {
            title: data.title,
            description: data.description,
            deadline: data.deadline,
            priority,
            status,
            uid
        }

        axios.post("http://localhost:3000/api/tasks", send)
            .then(res => {
                if (res.data.insertedId) {
                    refetch()
                    toast.success("Task added in To-Do list")
                }
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-2 flex-wrap">
                <div className="flex flex-col gap-2">
                    <input required type="text" placeholder="Title" {...register("title")} className="bg-transparent border border-blue-500 px-4 py-1 " />
                    <input required type="text" placeholder="Description" {...register("description")} className="bg-transparent border border-blue-500 px-4 py-1 h-12 " />
                </div>
                <div className="flex flex-col gap-2">
                    <input required type="date" placeholder="Deadline" {...register("deadline")} className="bg-transparent border border-blue-500 px-4 py-1" />
                    <select onChange={(e) => setPriority(e.target.value)} className="select select-primary w-full max-w-xs rounded-none">
                        <option disabled selected>Priority</option>
                        <option value={"low"}>Low</option>
                        <option value={"moderate"}>Moderate</option>
                        <option value={"high"}>High</option>
                    </select>
                </div>
            </div>

            <input type="submit" value={"Add Task"} className="btn btn-primary mt-2 btn-sm lg:btn-outline" />
        </form>
    );
};

export default InputField;