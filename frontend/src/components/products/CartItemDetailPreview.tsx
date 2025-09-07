import { FiTrash } from "react-icons/fi";
import { useCartFunctions } from "../../hooks/useCartFunctions";
import CartItemQuantity from "../Checkout/above_section/CartItemQuantity";

type CartItemDetailPreviewProps = {
    id: string;
    name: string;
    price: number;
    image: string
    quantity: number;
};

const CartItemDetailPreview: React.FC<CartItemDetailPreviewProps> = ({ name, price, quantity, id, image }) => {
    const { setQuantity, removeItem } = useCartFunctions();

    const handleQuantityPlus = () => {
        setQuantity(id, quantity + 1);
    };

    const handleQuantityMinus = () => {
        if (quantity > 1) {
            setQuantity(id, quantity - 1);
        } else {
            removeItem(id);
        }
    };
    
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setQuantity(id, value);
        } else if (value === 0) {
            removeItem(id);
        }
    };

    return (
        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
            {/* LookUp Required in Future to load image from DB */}
            <div className="h-16 w-16 bg-gray-200 rounded-md shrink-0 overflow-hidden"> <img src={image}/> </div>
            <div className="flex-1 min-w-0 mx-4">
                {/* //Cart Item, pasted directly here for preview */}
                <div>
                    <h1 className="text-lg font-medium text-gray-900">{name}</h1>
                    <p className="text-sm text-gray-500">${(price).toFixed(2)}</p>
                </div>
                <CartItemQuantity
                    quantity={quantity}
                    onPlus={handleQuantityPlus}
                    onMinus={handleQuantityMinus}
                    onQuantityChange={handleQuantityChange}
                />
            </div>
            
            <div className="flex items-center space-x-2">
                <h1 className="text-right font-medium text-gray-800">
                    ${((price) * quantity).toFixed(2)}
                </h1>
                <button 
                    onClick={() => removeItem(id)}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                >
                    <FiTrash className="h-5 w-5 cursor-pointer" />
                </button>
            </div>
        </div>
    );
};

export default CartItemDetailPreview;