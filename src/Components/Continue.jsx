import { useContext } from "react";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import { AllContextProvider } from "../AllContext/AllContext";


const Continue = () => {
    const { googleSignIn, facebookLogin, socialUser, path } = useContext(AllContextProvider)

    const handleSocialLogin = (loginType) => {

        return loginType()
    }

    return (
        <div className="mt-4">
            <hr />
            <h4 className="text-normal my-2">OR Continue with-</h4>
            <hr />
            <div className="flex justify-evenly items-center mt-4">
                <div className="ggl">
                    <button onClick={() => handleSocialLogin(googleSignIn)} className="bg-blue-600 text-white hover:bg-black py-1 px-4 rounded-sm flex items-center">
                        <FaGoogle></FaGoogle>
                        oogle
                    </button>
                </div>

                <div className="fbu">
                    <button onClick={() => handleSocialLogin(facebookLogin)} className="bg-blue-600 text-white hover:bg-black py-1 px-4 rounded-sm flex items-center">
                        <FaFacebookSquare></FaFacebookSquare>
                        acebook
                    </button>
                </div>
            </div>

            {
                socialUser &&
                <Navigate to={path || "/"} />
            }
        </div>
    );
};

export default Continue;