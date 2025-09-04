//Implement Pages Feature
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import useGetAllProducts from "../hooks/useGetAllProducts";
import type { Product } from "../types";

const ProductsPage = () => {

    const { products } = useGetAllProducts();
    const navigate = useNavigate()
    const onProductClick = (product: Product) => {
        console.log('Product Clicked');
        navigate(`/product/${product.id}`)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
            <div className="container mx-auto px-4 py-10">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl mt-25 md:text-4xl font-bold text-gray-900">
                        In-Store Products
                    </h1>
                    <p className="mt-2 text-gray-600">Browse our curated selection of authentic Nepalese goods.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} onClick={onProductClick} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductsPage;