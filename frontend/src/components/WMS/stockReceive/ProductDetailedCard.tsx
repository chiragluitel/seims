import type { Product } from "../../../types"

interface ProductDetailedCardProps {
    product: Product
}

const ProductDetailedCard: React.FC<ProductDetailedCardProps> = ({ product }) => {
    const isLowStock = product.price <= 5;

    return (
        <div className="relative bg-gray-900 rounded-2xl p-8 shadow-2xl text-white min-w-3xl flex space-x-8">
            <div
                className={`absolute top-5 right-5 h-5 w-5 rounded-full ${
                    isLowStock ? "bg-red-500" : "bg-green-500"
                }`}
            ></div>

            {product.image ? (
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-40 h-40 object-cover rounded-xl border border-gray-700 shadow-md"
                />
            ) : (
                <div className="w-40 h-40 flex items-center justify-center bg-gray-700 rounded-xl text-gray-400">
                    No Image
                </div>
            )}

            <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold">{product.name}</h2>

                <div className="grid grid-cols-1 gap-y-3 gap-x-6 text-lg">
                    <p>
                        <span className="font-semibold">Stock Levels:</span>{" "}
                        {product.price}
                    </p>
                    <p>
                        <span className="font-semibold">Price:</span>{" "}
                        {product.price ? `$${product.price}` : "N/A"}
                    </p>
                    <p>
                        <span className="font-semibold">Last Stock Received:</span>{" "}
                        {"—"}
                    </p>
                    <p>
                        <span className="font-semibold">Last Sold:</span>{" "}
                        { "—"}
                    </p>
                    <p>
                        <span className="font-semibold">Earliest Expiry:</span>{" "}
                        {product.name || "—"}
                    </p>
                    <p>
                        <span className="font-semibold">Category:</span>{" "}
                        {"—"}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailedCard
