import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AllContextProvider } from "../AllContext/AllContext";
import ad from "../assets/images/Pastel Feminine Girl Bookmark.gif"
import InputField from "../Pages/Dashboard/InputTask/InputField";
import { LuListTodo } from "react-icons/lu";
import { FcProcess } from "react-icons/fc";
import { RiTaskLine } from "react-icons/ri";
import { SiVirustotal } from "react-icons/si";
import { MdLabelImportant } from "react-icons/md";

const DashLayout = () => {
    const { user, logout } = useContext(AllContextProvider)

    return (
        <div className="flex flex-col md:flex-row p-4 gap-5">
            <div className="menus w-96 p-2 bg-gray-100 rounded-lg flex flex-col gap-4">
                <div className="bg-white px-2 py-5 rounded-lg flex flex-col items-center">
                    <div className="logo">
                        <Link to={"/"}>
                            <h2 className="font-medium text-3xl uppercase text-center">Tasker Pro</h2>
                        </Link>
                    </div>

                    <Link to={"/dashboard/home"}>
                        <div className="user flex gap-2 items-center mt-4">
                            <img height="40" width="40" className="aspect-square rounded-full" src={user.photoURL} alt="dp" />
                            <h6 className="font-medium">{user.displayName}</h6>
                        </div>
                    </Link>

                    <button onClick={logout} className="btn btn-outline btn-primary btn-sm w-1/2 mt-4">Logout</button>
                </div>

                <div className="menu flex flex-col gap-2 bg-white p-2 rounded-lg font-medium">
                    <NavLink to={"/dashboard/to-do"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active px-4 py-2 bg-blue-600 rounded-md text-white flex gap-2 items-center" : "px-4 py-2 bg-gray-100 rounded-md flex gap-2 items-center"
                    }><LuListTodo />To-Do</NavLink>

                    <NavLink to={"/dashboard/ongoing"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active items-center px-4 py-2 bg-blue-600 rounded-md text-white flex gap-2" : "px-4 py-2 bg-gray-100 rounded-md flex gap-2 items-center"
                    }><FcProcess />Ongoing</NavLink>

                    <NavLink to={"/dashboard/completed"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active items-center px-4 py-2 bg-blue-600 rounded-md text-white flex gap-2" : "px-4 py-2 bg-gray-100 rounded-md flex gap-2 items-center"
                    }><RiTaskLine />Completed</NavLink>

                    <NavLink to={"/dashboard/important"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active items-center px-4 py-2 bg-blue-600 rounded-md text-white flex gap-2" : "px-4 py-2 bg-gray-100 rounded-md flex gap-2 items-center"
                    }><MdLabelImportant />Important</NavLink>

                    <NavLink to={"/dashboard/all-tasks"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active items-center px-4 py-2 bg-blue-600 rounded-md text-white flex gap-2" : "px-4 py-2 bg-gray-100 rounded-md flex gap-2 items-center"
                    }><SiVirustotal />All Tasks</NavLink>


                </div>
            </div>

            <div className="p-4 bg-gray-100 w-full rounded-lg flex flex-col justify-between">
                <div className="">
                    <Outlet />
                </div>

                <div className="box">
                    <InputField />
                </div>
            </div>

            <div className="p-2 bg-gray-100 w-96 rounded-lg hidden lg:flex">
                <img className="w-full" src={ad} alt="ads" />
            </div>
        </div>
    );
};

export default DashLayout;