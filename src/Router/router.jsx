import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../Layouts/RootLayout';
import HomePage from '../Pages/Home/HomePage';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import DashLayout from '../Layouts/DashLayout';
import Home from '../Pages/Dashboard/Home';
import AboutUs from '../Pages/AboutUs/AboutUs';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            }
        ]
    },
    {
        path: "register",
        element: <Register />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "dashboard",
        element: <PrivateRoute><DashLayout /></PrivateRoute>,
        children: [
            {
                path: "home",
                element: <Home />
            }
        ]
    }
]);

export default router;