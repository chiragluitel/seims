import { FiTrash } from "react-icons/fi";
import { useCartFunctions } from "../../../hooks/useCartFunctions";
import CartItem from "./CartItem";
import CartItemQuantity from "./CartItemQuantity";
import logo from '../../../assets/logoexample.jpg'

type CartItemDetailProps = {
    id: string;
    name: string;
    price: number;
    quantity: number;
};

const CartItemDetail: React.FC<CartItemDetailProps> = ({ name, price, quantity, id }) => {
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
            <div className="h-16 w-16 bg-gray-200 rounded-md shrink-0"> <img src={logo}/> </div>
            <div className="flex-1 min-w-0 mx-4">
                <CartItem name={name} price={price} />
                <CartItemQuantity
                    quantity={quantity}
                    onPlus={handleQuantityPlus}
                    onMinus={handleQuantityMinus}
                    onQuantityChange={handleQuantityChange}
                />
            </div>
            
            <div className="flex items-center space-x-2">
                <h1 className="text-right font-medium text-gray-800">
                    ${(price * quantity).toFixed(2)}
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

export default CartItemDetail;