interface CartItemQuantityProps{
    quantity: number
    onPlus: () => void
    onMinus: () => void
}

const CartItemQuantity: React.FC<CartItemQuantityProps> = ({quantity, onPlus, onMinus}) =>{
    return(
        <>
            <div>
                <button className="cursor-pointer" onClick={onMinus}> - </button>  <span> {quantity} </span> <button className="cursor-pointer" onClick={onPlus}> + </button>
            </div>
        </>
    )
}

export default CartItemQuantity;