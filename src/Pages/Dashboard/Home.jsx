import { useContext } from "react";
import { AllContextProvider } from "../../AllContext/AllContext";

const Home = () => {
    const { user } = useContext(AllContextProvider);

    return (
        <div>
            <h2 className="text-2xl font-bold uppercase text-center">Profile</h2>

            <div className="info w-fit mx-auto my-20">
                <div className="img w-fit mx-auto">
                    <img height="150" width="150" className="aspect-square rounded-full" src={user.photoURL} alt="dp" />
                </div>
                <div className="text mt-6">
                    <h2 className="text-center text-2xl font-medium">{user.displayName}</h2>
                </div>
            </div>
        </div >
    );
};

export default Home;