import { Outlet } from "react-router-dom";

const DashLayout = () => {
    return (
        <div>
            dash
            <Outlet/>
        </div>
    );
};

export default DashLayout;