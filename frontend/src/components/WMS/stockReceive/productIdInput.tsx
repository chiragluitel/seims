import { FiSearch } from "react-icons/fi"

interface productIdInputProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


const ProductIdInput:React.FC<productIdInputProps> = ({onSubmit}) => {
    return (
        <>
            <form className="w-1/2" onSubmit={(e) => {onSubmit(e)}}>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FiSearch className="h-5 w-5 text-gray-400" /> 
                    </div>
                    <input
                        name="productId"
                        type="text"
                        placeholder="Enter Product ID or Scan Barcode"
                        className="block w-full rounded-full py-3 pl-10 pr-20 bg-gray-800 text-white placeholder-gray-400 border border-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300"
                    />
                    <button
                        type="submit"
                        className="absolute inset-y-0 right-0 px-5 m-1 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition duration-300 shadow-md cursor-pointer"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default ProductIdInput
