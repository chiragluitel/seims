import { FaLeaf, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const StoreInfo = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <FaLeaf className="text-green-400 text-2xl" />
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                    SEIMS
                </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
                Your trusted Nepalese grocery store, bringing fresh ingredients and authentic products to your doorstep.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                    <FaFacebook className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                    <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                    <FaTwitter className="text-xl" />
                </a>
            </div>
        </div>
    )
}

export default StoreInfo;
