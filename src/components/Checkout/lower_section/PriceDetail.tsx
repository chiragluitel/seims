import { GST } from "../../../constants";
import { useCartFunctions } from "../../../hooks/useCartFunctions"

const PriceDetail = () =>{
    const {total, discount } = useCartFunctions();
    return (
        <>
            <div>
                <h1> Subtotal: ${total} </h1>
                <h1> GST: {GST}% </h1>
                <h1> Promotions: {discount} </h1>
            </div>


        </>
    )
}

export default PriceDetail