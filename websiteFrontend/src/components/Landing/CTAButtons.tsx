import { FaArrowRight, FaShoppingCart, FaBox, FaStore } from 'react-icons/fa';

const CTAButtons = () => {
    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 cursor-pointer rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                    <FaShoppingCart className="text-xl" />
                    Browse Products
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="group bg-white text-gray-700  cursor-pointer px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                    <FaBox className="text-xl" />
                    View Stock
                </button>
            </div>
            
            <div className="flex items-center">
                <button className="group bg-white cursor-pointer text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                    <FaStore className="text-lg" />
                    Visit Our Store
                </button>
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