import ProductCards from "../ProductCards";
import ScrollableBox from "../ListItems/ScrollableBox";
// import { products } from "../../mocked_DB/Products";
import type { Product } from "../../types";
import { useCartFunctions } from "../../hooks/useCartFunctions";
import useListAllProducts from "../../hooks/database/useListAllProducts";

const QuickSelect = () => {
    const {addItem} = useCartFunctions();
    const {products, isLoading} = useListAllProducts();
    const handleProductClick = (product: Product)=>{
        try{
        addItem(product)
        }catch(error:any){
            console.error('Error Occured when adding to cart')
        }
    }
    
    return (
    <>
        <div>
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Quick Select</h1>
            <div className="h-auto w-auto">
            <ScrollableBox>
                {isLoading? (
                    <div> Loading ...</div>
                ):(
                    products.map((product) => (
                        <ProductCards key={product.id} product={product} onClick={handleProductClick} />
                    ))
                )}

            </ScrollableBox>
            </div>
            
        </div>
    </>
    )
}

export default QuickSelect;