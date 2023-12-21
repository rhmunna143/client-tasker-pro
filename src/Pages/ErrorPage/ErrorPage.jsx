import { Link } from "react-router-dom";
import errorImg from "../../assets/images/error.jpg";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <img
                src={errorImg}
                alt="404 Illustration"
                className="w-2/3 md:w-1/2 max-w-md mb-8"
            />
            <p className="text-lg text-gray-600 mb-8">
                Oops! The page you are looking for does not exist.
            </p>

            <Link to={"/"} className="btn btn-primary btn-outline">
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
