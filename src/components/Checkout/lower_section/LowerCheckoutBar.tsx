import { GST } from "../../../constants";
import { useCartFunctions } from "../../../hooks/useCartFunctions";
import ApplyPromotion from "./ApplyPromotion"
import Charge from "./Charge"
import PriceDetail from "./PriceDetail"

const LowerCheckoutBar = () =>{
    const {total, discount} = useCartFunctions();
    return (
        <>
            <div>
                <PriceDetail /> 
                <ApplyPromotion />
                <Charge total={ ( total + (total * (GST/100)) ) - discount }/>
            </div>
        </>
    )
}
export default LowerCheckoutBar