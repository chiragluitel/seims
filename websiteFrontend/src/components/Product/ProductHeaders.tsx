interface ProductHeadersProps {
    name: string,
    price: number
}

const ProductHeaders:React.FC<ProductHeadersProps> = ({name, price}) => {
    return (
        <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{name}</h1>
            <div>
                <span className="inline-flex items-center rounded-md bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 border border-emerald-100">
                    ${price.toFixed(2)}
                </span>
            </div>
        </div>
    )
}

export default ProductHeaders