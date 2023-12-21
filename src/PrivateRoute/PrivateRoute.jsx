/* eslint-disable react/prop-types */
import { useContext } from "react";
import loader from "../assets/images/ldr.gif"
import { Navigate, useLocation } from "react-router-dom";
import { AllContextProvider } from "../AllContext/AllContext";

export const LoaderComponent = () => {

    return <img className="max-w-[100px]" src={loader} alt="loading spinner" />
};

const PrivateRoute = ({ children }) => {
    const { user, loading, setPath } = useContext(AllContextProvider)
    const location = useLocation()
    const path = location?.pathname;

    setPath(path);

    if (loading) {

        return <div className="h-screen flex justify-center items-center">
            <LoaderComponent />
        </div>
    }

    if (user) {

        return children;
    }

    return (
        <div>
            <Navigate to="/login" />
        </div>
    );
};

export default PrivateRoute;