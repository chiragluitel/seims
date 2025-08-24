import CartItem from "./CartItem"
import CartItemQuantity from "./CartItemQuantity";

interface CartItemDetailProps{
    name: string,
    price: number
    quantity: number
}

const CartItemDetail: React.FC<CartItemDetailProps> = ({name, price, quantity}) =>{ 
    const handleQuantityPlus = () =>{

    }
    const handleQuantityMinus = () =>{
        
    }
    return (
        <>
            <div>
                <CartItem name={name} price={price}/>
                <CartItemQuantity productID="id" quantity={2} onMinus={handleQuantityMinus} onPlus={handleQuantityPlus} />
                <h1> Total: {price * quantity}  </h1>
            </div>
        </>
    )
}

export default CartItemDetail;