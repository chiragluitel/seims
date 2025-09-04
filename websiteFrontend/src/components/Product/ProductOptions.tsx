interface ProductOptionsProps{
    inStockQuantity: number,
    clickNcollectQuantity: number
}

const ProductOptions:React.FC<ProductOptionsProps> = ({inStockQuantity, clickNcollectQuantity}) =>{ 
    return (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-green-600 p-4">
                <div className="text-sm text-gray-500">In Stock</div>
                <div className="mt-1 text-2xl font-bold text-gray-900">{inStockQuantity}</div>
                <div className="mt-1 text-sm text-gray-500">{inStockQuantity>0? 'Available on shelves' : 'No stock'}</div>
            </div>
            <div className="rounded-xl border border-green-600 p-4">
                <div className="text-sm text-gray-500">Click & Collect</div>
                <div className="mt-1 text-2xl font-bold text-gray-900">{clickNcollectQuantity}</div>
                <div className="mt-1 text-sm text-gray-500">{clickNcollectQuantity>0? 'Buy Now, Collect Later' : 'Not available'}</div>
            </div>
        </div>
    )
}

export default ProductOptions;