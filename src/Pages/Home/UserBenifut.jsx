
const UserBenefitsSection = () => {
    const userBenefits = [
        {
            title: 'Developers',
            description: 'Manage tasks, track progress, and collaborate on projects more efficiently.',
        },
        {
            title: 'Corporate Professionals',
            description: 'Organize work schedules, prioritize tasks, and enhance team productivity.',
        },
        {
            title: 'Bankers',
            description: 'Streamline financial tasks, monitor deadlines, and improve task management.',
        },
        // Add more user types and their benefits as needed
    ];

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Who Can Benefit?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {userBenefits.map((userType, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">{userType.title}</h3>
                            <p className="text-gray-700">{userType.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UserBenefitsSection;