import ProductCards from "../ProductCards";
import logo from '../../assets/logoexample.jpg'
import ScrollableBox from "../ListItems/ScrollableBox";
import { products } from "../../Mocked_DB/Products";

const QuickSelect = () => {
    return (
    <>
        <div>
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Quick Select</h1>
            <div className="h-auto w-auto">
            <ScrollableBox>
                {products.map((product) => (
                    <ProductCards key={product.id} name={product.name} image={logo}/>
                ))}
            </ScrollableBox>
            </div>
            
        </div>
    </>
    )
}

export default QuickSelect;