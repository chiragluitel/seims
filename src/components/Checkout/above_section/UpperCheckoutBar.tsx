import { useCartFunctions } from "../../../hooks/useCartFunctions";
import CartItemDetail from "./CartItemDetail";

const UpperCheckoutBar = () => {
    const { items } = useCartFunctions();
    return (
        <div className="bg-white rounded-lg shadow-md overflow-y-auto">
            <h2 className="text-xl font-semibold text-gray-800 p-4">Cart</h2>
            <div className="px-4 pb-4 space-y-4">
                {items.length > 0 ? (
                    items.map((item) => (
                        <CartItemDetail
                            key={item.ID}
                            id={item.ID}
                            name={item.Name}
                            price={item.Price}
                            quantity={item.quantity}
                        />
                    ))
                ) : (
                    <p className="text-gray-500 text-center mt-8">No Items on Cart Currently</p>
                )}
            </div>
        </div>
    );
};

export default UpperCheckoutBar;