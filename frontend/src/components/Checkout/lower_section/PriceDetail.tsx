import { GST } from "../../../constants";
import { useCartFunctions } from "../../../hooks/useCartFunctions";

const PriceDetail = () => {
    const { total, discount } = useCartFunctions();
    const gstAmount = total * (GST / 100);
    const finalTotal = (total + gstAmount) - discount;

    return (
        <div className="space-y-2 text-gray-700">
            <div className="flex justify-between items-center text-sm">
                <h1 className="font-medium">Subtotal</h1>
                <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
                <h1 className="font-medium">GST ({GST}%)</h1>
                <span className="font-medium">${gstAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
                <h1 className="font-medium">Promotions</h1>
                <span className="font-medium text-red-500">-${discount.toFixed(2)}</span>
            </div>
            
            <hr className="my-4 border-gray-200" />
            
            <div className="flex justify-between items-center text-lg font-bold">
                <h1>Total</h1>
                <span>${finalTotal.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default PriceDetail;