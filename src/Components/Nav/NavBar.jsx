/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AllContextProvider } from "../../AllContext/AllContext";

const menus = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About Us", link: "/about-us" },
    { id: 3, name: "Register", link: "/register" },
    { id: 4, name: "Login", link: "/login" },
]

const NavBar = () => {
    const { user, logout } = useContext(AllContextProvider)

    return (
        <nav className="navbar bg-base-100">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu font-medium  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menus.map(menu => <li key={menu.id}><NavLink to={menu.link}>{menu.name}</NavLink></li>)
                        }
                    </ul>
                </div>

                <Link to={"/"} className="btn logo btn-ghost text-2xl font-bold md:text-4xl"
                >Tasker Pro</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    {
                        menus.map(menu => <li key={menu.id}><NavLink to={menu.link}>{menu.name}</NavLink></li>)
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user &&
                    <Link><button onClick={logout} className="btn btn-outline btn-primary mr-5">Logout</button></Link>

                }

                <Link to={"/dashboard/home"} className="btn btn-primary">
                    Let's Explore
                </Link>
            </div>

        </nav>
    );
};

export default NavBar;