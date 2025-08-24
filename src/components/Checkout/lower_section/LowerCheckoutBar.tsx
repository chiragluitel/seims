import ApplyPromotion from "./ApplyPromotion"
import Charge from "./Charge"
import PriceDetail from "./PriceDetail"

const LowerCheckoutBar = () =>{
    return (
        <>
            <div>
                <PriceDetail /> 
                <ApplyPromotion />
                <Charge total={10}/>
            </div>
        </>
    )
}
export default LowerCheckoutBar