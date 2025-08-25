interface CartItemProps {
    name: string;
    price: number;
}

const CartItem: React.FC<CartItemProps> = ({ name, price }) => {
    return (
        <div>
            <h1 className="text-lg font-medium text-gray-900">{name}</h1>
            <p className="text-sm text-gray-500">${price.toFixed(2)}</p>
        </div>
    );
};

export default CartItem;