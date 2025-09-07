import type { Product } from "../../../types";
import WebsiteProductCardPreview from "../../Website/WebsiteProductCardPreview";
import CartItemDetailPreview from "../../products/CartItemDetailPreview";
import ProductCardPreview from "../../products/ProductCardPreview";

import ExistingProductFormRO from "./existingProductFormRO";
interface NonEditingModeScreenProps {
    product: Product,
    onEditClick : () => void
}
const NonEditingModeScreen:React.FC<NonEditingModeScreenProps> = ({product, onEditClick} ) =>{
    return(
    <>
    <div className="p-8 text-black bg-white min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Viewing: {product?.name} </h1>

        <div className="flex items-start space-x-8">

            <div className="flex-1 bg-white border border-black p-6 rounded-lg shadow-lg">
                <div className="flex items-start justify-between">
                <h2 className="text-xl font-semibold mb-4">Product Details</h2>
                    <button onClick={onEditClick}> <span className="text-xl font-semibold text-blue-600 cursor-pointer underline"> Edit </span> </button>
                </div>
                <ExistingProductFormRO product={product} />
            </div>

            <div className="flex-1 bg-gray-600 border border-black p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Preview</h2>
                <div className="flex-1 justify-center items-center space-y-4">
                <ProductCardPreview
                    name={product.name.length > 0 ? product.name : "Product Name"}
                    price={product.instore_price_cents/100}
                    image={product.image}
                />
                <CartItemDetailPreview 
                id={product.id} 
                name={product.name} 
                price={product.instore_price_cents/100} 
                quantity={1} 
                image={product.image} 
                />

                <h1 className="text-xl font-semibold mb-4"> Website </h1>
                <WebsiteProductCardPreview product={product} onClick={()=>{}} />
                </div>
            </div>

        </div>
    </div>
    </>       
    )
}
export default NonEditingModeScreen;