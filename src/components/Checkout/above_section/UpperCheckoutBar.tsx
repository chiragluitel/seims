import { useCartFunctions } from "../../../hooks/useCartFunctions"
import CartItemDetail from "./CartItemDetail"

const UpperCheckoutBar= () =>{
    
    const { items } = useCartFunctions();
    return (
        <>
            <div>
            {items.length>0? (
                items.map((item) => <CartItemDetail key={item.ID} id={item.ID} name={item.Name} price={item.Price} quantity={item.quantity} /> )
            ) : (
                <p> No Items on Cart Currently </p>
            )}                 
            </div>
        </>
    )
}
export default UpperCheckoutBar