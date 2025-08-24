import ProductCards from "../ProductCards";
import ScrollableBox from "../ListItems/ScrollableBox";
import { products } from "../../mocked_DB/Products";

const QuickSelect = () => {
    return (
    <>
        <div>
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Quick Select</h1>
            <div className="h-auto w-auto">
            <ScrollableBox>
                {products.map((product) => (
                    <ProductCards key={product.id} name={product.name} image={product.image}/>
                ))}
            </ScrollableBox>
            </div>
            
        </div>
    </>
    )
}

export default QuickSelect;