import { FaArrowRight, FaShoppingCart, FaMailBulk, FaStore } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CTAButtons = () => {
    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
                <Link to={'/products'} className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 cursor-pointer rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                    <FaShoppingCart className="text-xl" />
                    Browse Products
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link to={'/contact'} className="group bg-white text-gray-700  cursor-pointer px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                    <FaMailBulk className="text-xl" />
                    Contact Us
                </Link>
            </div>
            
            <div className="flex items-center">
                <Link to={'/store'} className="group bg-white cursor-pointer text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                    <FaStore className="text-lg" />
                    Visit Our Store
                </Link>
            </div>
            
            <div className="pt-4">
                <p className="text-sm text-gray-500 text-center">
                    Fresh groceries delivered daily • Authentic Nepalese products
                </p>
            </div>
        </div>
    )
}

export default CTAButtons;