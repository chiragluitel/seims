interface ProductHeadersProps {
    name: string,
    price: number
}

const ProductHeaders:React.FC<ProductHeadersProps> = ({name, price}) => {
    return (
        <>
            <h1> {name} </h1>
            <h1> {price} </h1>
        </>
    )
}

export default ProductHeaders