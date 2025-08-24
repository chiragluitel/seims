import { FiMinus, FiPlus } from "react-icons/fi";


interface CartItemQuantityProps {
    quantity: number;
    onPlus: () => void;
    onMinus: () => void;
    onQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CartItemQuantity: React.FC<CartItemQuantityProps> = ({ quantity, onPlus, onMinus, onQuantityChange }) => {
    return (
        <div className="flex items-center space-x-2 mt-1">
            <button
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={onMinus}
            >
                <FiMinus className="h-4 w-4" />
            </button>
            <input
                type="number"
                value={quantity}
                onChange={onQuantityChange}
                className="w-8 text-center bg-transparent border-none focus:outline-none text-sm font-medium"
            />
            <button
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={onPlus}
            >
                <FiPlus className="h-4 w-4" />
            </button>
        </div>
    );
};

export default CartItemQuantity;