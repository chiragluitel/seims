import { useParams } from "react-router-dom";
import useGetOneProduct from "../../hooks/database/useGetOneProduct";
import type { Product } from "../../types";
import { useState } from "react";
import ProductCardPreview from "../../components/products/ProductCardPreview";
import CartItemDetail from "../../components/Checkout/above_section/CartItemDetail";
import ExistingProductFormRW from "../../components/WMS/existingProducts/existingProductFormRW";
import ExistingProductFormRO from "../../components/WMS/existingProducts/existingProductFormRO";
import { sample_product } from "../../constants";
import ProductCard from "../../components/Website/ProductCard";

const UpdateExistingProductUpdateScreen = () =>{ 
    const {productID} = useParams<{productID: string}>()
    const {product} = useGetOneProduct(productID);
    const [isEditMode, setIsEditMode] = useState(false);
    const [toBeUpdatedProduct, setToBeUpdatedProduct] = useState<Product>(sample_product);
    
    
      const onInputChangeValue = (field: keyof Product, value: string | number) => {
        setToBeUpdatedProduct((prevProduct) => ({
          ...prevProduct,
          [field]: value,
        }));
      };
    
    return (
        <>
        {(product && !isEditMode) && (
                <div className="p-8 text-black bg-white min-h-screen">
                <h1 className="text-3xl font-bold mb-6">Viewing: {product?.name} </h1>
                <div className="flex items-start space-x-8">
                <div className="flex-1 bg-white border border-black p-6 rounded-lg shadow-lg">
                    <div className="flex items-start justify-between">
                    <h2 className="text-xl font-semibold mb-4">Product Details</h2>
                     <button onClick={() => setIsEditMode(true)}> <span className="text-xl font-semibold text-blue-600 cursor-pointer underline"> Edit </span> </button>
                    </div>
                    <ExistingProductFormRO product={product} onInputChange={onInputChangeValue} />
                </div>

                <div className="flex-1 bg-gray-600 border border-black p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Preview</h2>
                    <div className="flex-1 justify-center items-center space-y-4">
                    <ProductCardPreview
                        name={toBeUpdatedProduct.name.length > 0 ? toBeUpdatedProduct.name : "Product Name"}
                        price={toBeUpdatedProduct.instore_price_cents}
                        image={toBeUpdatedProduct.image}
                    />
                    <CartItemDetail 
                    id={toBeUpdatedProduct.id} 
                    name={toBeUpdatedProduct.name} 
                    price={toBeUpdatedProduct.instore_price_cents} 
                    quantity={1} 
                    image={toBeUpdatedProduct.image} 
                    />

                    <h1 className="text-xl font-semibold mb-4"> Website </h1>
                    <ProductCard product={product} onClick={()=>{}} />
                    </div>
                </div>

                </div>
            </div>
        )}

        {(product && isEditMode) && (
                <div className="p-8 text-black bg-white min-h-screen">
                <h1 className="text-3xl font-bold mb-6">Editing: {product?.name} </h1>

                <div className="flex items-start space-x-8">
                
                <div className="flex-1 bg-white border border-black p-6 rounded-lg shadow-lg">
                    <div className="flex items-start justify-between">
                    <h2 className="text-xl font-semibold mb-4">Product Details</h2>
                    </div>
                    <ExistingProductFormRW product={product} onInputChange={onInputChangeValue} />
                </div>

                <div className="flex-1 bg-gray-600 border border-black p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Preview</h2>
                    <div className="flex-1 justify-center items-center space-y-4">
                    <ProductCardPreview
                        name={toBeUpdatedProduct.name.length > 0 ? toBeUpdatedProduct.name : "Product Name"}
                        price={toBeUpdatedProduct.instore_price_cents}
                        image={toBeUpdatedProduct.image}
                    />
                    <CartItemDetail 
                    id={toBeUpdatedProduct.id} 
                    name={toBeUpdatedProduct.name} 
                    price={toBeUpdatedProduct.instore_price_cents} 
                    quantity={1} 
                    image={toBeUpdatedProduct.image} 
                    />
                    <h1 className="text-xl font-semibold mb-4"> Website </h1>
                    <ProductCard product={product} onClick={()=>{}} />
                    </div>

                </div>

                </div>
            </div>
        )}
        </>


    )
};
export default UpdateExistingProductUpdateScreen;