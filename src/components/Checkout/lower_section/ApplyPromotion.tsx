import { useState } from "react";
import { useCartFunctions } from "../../../hooks/useCartFunctions";

const ApplyPromotion = () => {
    const [promoCode, setPromoCode] = useState<string>("");
    const { addDiscount } = useCartFunctions();

    const handleApplyPromotion = () => {
        if (promoCode.trim()) {
            //To implement: Validation and Addition of Promotion
            addDiscount(10);
            console.log(`Applied promotion: ${promoCode}`);
        } else {
            console.error("Discount ID not valid");
        }
    };

    return (
        <div className="flex items-center gap-2 mt-4 p-2 bg-white rounded-md border border-gray-300 focus-within:ring-1 focus-within:ring-gray-400">
            <input
                placeholder="Enter a valid promotion code..."
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-transparent outline-none placeholder-gray-400"
            />
            <button
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md cursor-pointer hover:bg-gray-900 transition-colors"
                onClick={handleApplyPromotion}
            >
                Apply
            </button>
        </div>
    );
};

export default ApplyPromotion;