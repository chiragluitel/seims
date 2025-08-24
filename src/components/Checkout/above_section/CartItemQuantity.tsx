interface CartItemQuantityProps{
    productID: string,
    quantity: number
    onPlus: () => void
    onMinus: () => void
}

const CartItemQuantity: React.FC<CartItemQuantityProps> = ({quantity, onPlus, onMinus}) =>{
    return(
        <>
            <div>
                <button onClick={onMinus}> - </button>
                    <p> {quantity} </p>
                <button onClick={onPlus}> + </button>
            </div>
        </>
    )
}

export default CartItemQuantity;