import { GST } from "../../../constants";
import { useCartFunctions } from "../../../hooks/useCartFunctions";
import ApplyPromotion from "./ApplyPromotion";
import Charge from "./Charge";
import PriceDetail from "./PriceDetail";

const LowerCheckoutBar = () => {
    const { total, discount } = useCartFunctions();
    const finalTotal = (total + (total * (GST / 100))) - discount;

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <PriceDetail />
            <ApplyPromotion />
            <div className="mt-4">
                <Charge total={finalTotal} />
            </div>
        </div>
    );
};

export default LowerCheckoutBar;