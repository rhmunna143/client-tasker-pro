import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div>
            root

            <Outlet />
        </div>
    );
};

export default RootLayout;