import { useParams } from "react-router-dom";
import useGetOneProduct from "../hooks/useGetOneProduct";
import ProductImage from "../components/Product/ProductImage";
import ProductDetails from "../components/Product/ProductDetails";
import BackButton from '../components/BackButton';

const ProductDetailPage = () => {
    const {productID} = useParams();
    const {product} = useGetOneProduct(productID);
    return (
        <div className="min-h-screen pt-25 bg-gradient-to-br from-green-50 via-white to-emerald-50">
            <div className="container mx-auto px-4 py-8">
                <BackButton linkTo='/products' label='Back To Products' />
                {product ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ProductImage image={product.image} />
                        <ProductDetails name={product.name} price={product.price} />
                    </div>
                ) : (
                    <div className="min-h-[40vh] flex items-center justify-center">
                        <div className="text-gray-600">Loading…</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductDetailPage;