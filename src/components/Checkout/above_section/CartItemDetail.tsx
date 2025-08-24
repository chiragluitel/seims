import { useCartFunctions } from "../../../hooks/useCartFunctions";
import CartItem from "./CartItem"
import CartItemQuantity from "./CartItemQuantity";

type CartItemDetailProps = {
    id: string,
    name: string,
    price: number,
    quantity: number
}

const CartItemDetail: React.FC<CartItemDetailProps> = ({name, price, quantity, id}) =>{ 
    const {setQuantity} = useCartFunctions();
    const handleQuantityPlus = () =>{
        setQuantity(id, quantity + 1)
    }
    const handleQuantityMinus = () =>{
        setQuantity(id, quantity - 1)
    }
    return (
        <>
            <div>
                <CartItem name={name} price={price} />
                <CartItemQuantity quantity={quantity} onPlus={handleQuantityPlus} onMinus={handleQuantityMinus}/>
                <h1> {price * quantity} </h1>
            </div>
        </>
    )
}

export default CartItemDetail;