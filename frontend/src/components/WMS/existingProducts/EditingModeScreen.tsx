import type { Product } from "../../../types";
import ProductCard from "../../Website/ProductCard";
import CartItemDetailPreview from "../../products/CartItemDetailPreview";
import ProductCardPreview from "../../products/ProductCardPreview";
import ExistingProductFormRW from "./existingProductFormRW";

interface EditingModeScreenProps {
    product: Product,
    onInputChange: (field: keyof Product, value: string | number) => void;
    toBeUpdatedProduct: Product;
    onNestedInputChange: <T extends "location" | "category">(field: T, nestedField: keyof Product[T], value: string) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading: boolean;
    formRef: React.RefObject<HTMLFormElement | null>
}

const EditingModeScreen:React.FC<EditingModeScreenProps> = ( {product, onInputChange, toBeUpdatedProduct, onNestedInputChange, onSubmit, loading, formRef}) =>{
    return(
    <>
    <div className="p-8 text-black bg-white min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Editing: {product?.name} </h1>

        <div className="flex items-start space-x-8">
        
            <div className="flex-1 bg-white border border-black p-6 rounded-lg shadow-lg">
                <div className="flex items-start justify-between">
                <h2 className="text-xl font-semibold mb-4">Product Details</h2>
                </div>
                <ExistingProductFormRW product={product} onInputChange={onInputChange} onNestedInputChange={onNestedInputChange} onSubmit={onSubmit} loading={loading} formRef={formRef}/>
            </div>

            <div className="flex-1 bg-gray-600 border border-black p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Preview</h2>
                <div className="flex-1 justify-center items-center space-y-4">
                <ProductCardPreview
                    name={toBeUpdatedProduct.name.length > 0 ? toBeUpdatedProduct.name : "Product Name"}
                    price={toBeUpdatedProduct.instore_price_cents}
                    image={toBeUpdatedProduct.image}
                />
                <CartItemDetailPreview 
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
    </>       
    )
}
export default EditingModeScreen;