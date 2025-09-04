import CTA from "./CTA";
import ProductHeaders from "./ProductHeaders";
import ProductOptions from "./ProductOptions";

interface ProductDetailsProps {
    name: string,
    price: number
}

const ProductDetails:React.FC<ProductDetailsProps> = ({name, price}) => { 
    const onClick = () => {
        console.log ('Processing Payment...')
    }
    return (
        <> 
            <ProductHeaders name={name} price={price} />
            <ProductOptions inStockQuantity={10} clickNcollectQuantity={3}/>
            <CTA onClick={onClick} />
        </>
    )    
}

export default ProductDetails;