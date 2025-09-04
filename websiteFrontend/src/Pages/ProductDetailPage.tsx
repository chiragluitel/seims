import { useParams } from "react-router-dom";
import useGetOneProduct from "../hooks/useGetOneProduct";

const ProductDetailPage = () => {
    const {productID} = useParams();
    const {product} = useGetOneProduct(productID);
    return (
        <>
            {product? (
                <div>
                    <h1> {product.name} </h1>
                </div>
            ) : (
                <div>
                    <h1> Loading .... </h1>
                </div>
            )}
        </>
    )
}

export default ProductDetailPage;