import { useState } from "react"
import { useCartFunctions } from "../../../hooks/useCartFunctions"

const ApplyPromotion = ( ) =>{
    const [promoCode, setPromoCode] = useState<string>("")
    const {addDiscount} = useCartFunctions();
    const handleApplyPromotion = (discountId: string) =>{
        if(!discountId){
            console.error("Discount ID not valid")
        }else{
            addDiscount(10);
        }
    }
    return (
        <>
            <div> 
                <input
                 placeholder="Enter a valid promotion code..."
                 value={promoCode} 
                 onChange={(e)=>setPromoCode(e.target.value)}
                 />
                <button className="cursor-pointer" onClick={() => handleApplyPromotion(promoCode) }> Apply </button>
            </div>
        </>
    )
}

export default ApplyPromotion;