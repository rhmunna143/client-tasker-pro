import UserBenefitsSection from "./UserBenifut";

const HomePage = () => {
    return (
        <>
            <div className="min-h-80 flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Tasker Pro</h1>
                    <p className="text-lg text-gray-700 mb-6">The Task Management Solution as You Want</p>
                    <a
                        href="#"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Get Started
                    </a>
                </div>
            </div>

            <UserBenefitsSection />
        </>
    );
};

export default HomePage;