interface CartItemProps{
    name: string,
    price: number
}

const CartItem:React.FC<CartItemProps> = ({name, price}) =>{
    return (
        <>
            <div>
                <h1> {name} </h1>
                <p> ----------- </p>
                <p> {price} </p>
            </div>
        </>
    )
}

export default CartItem;