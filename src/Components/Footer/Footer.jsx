import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-5 md:justify-between px-4">
                <div>
                    <h3 className="text-lg font-medium mb-2">Connect with Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-400 hover:text-blue-300" aria-label="Facebook">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="text-blue-400 hover:text-blue-300" aria-label="Twitter">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="text-blue-400 hover:text-blue-300" aria-label="LinkedIn">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="#" className="text-blue-400 hover:text-blue-300" aria-label="Instagram">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
                <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Tasker Pro. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
