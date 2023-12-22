import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <hr />
            <footer className="bg-gray-200 text-black py-32">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-5 md:justify-between px-4">
                    <div>
                        <h3 className="text-lg font-medium mb-2">Connect with Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-black-400 hover:text-black-300" aria-label="Facebook">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="text-black-400 hover:text-black-300" aria-label="Twitter">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="text-black-400 hover:text-black-300" aria-label="LinkedIn">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="#" className="text-black-400 hover:text-black-300" aria-label="Instagram">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                    <p className="text-sm text-black-400">&copy; {new Date().getFullYear()} Tasker Pro by <a href="https://munna-dev.web.app" className="text-blue-600 hover:text-blue-800">Munna</a>. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
