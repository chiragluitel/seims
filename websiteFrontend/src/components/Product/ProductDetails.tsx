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
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-8">
            <ProductHeaders name={name} price={price} />

            <p className="mt-6 text-gray-700 leading-relaxed">
                Sourced with care and crafted for exceptional freshness. This authentic Nepalese product brings traditional flavors to your kitchen with consistent quality and taste.
                Sourced with care and crafted for exceptional freshness. This authentic Nepalese product brings traditional flavors to your kitchen with consistent quality and taste.
                Sourced with care and crafted for exceptional freshness. This authentic Nepalese product brings traditional flavors to your kitchen with consistent quality and taste.
                Sourced with care and crafted for exceptional freshness. This authentic Nepalese product brings traditional flavors to your kitchen with consistent quality and taste.
                Sourced with care and crafted for exceptional freshness. This authentic Nepalese product brings traditional flavors to your kitchen with consistent quality and taste.
                Sourced with care and crafted for exceptional freshness. This authentic Nepalese product brings traditional flavors to your kitchen with consistent quality and taste.
                Sourced with care and crafted for exceptional freshness. This authentic Nepalese product brings traditional flavors to your kitchen with consistent quality and taste.
            </p>

            <ProductOptions inStockQuantity={24} clickNcollectQuantity={12}/>
            <CTA onClick={onClick} />
        </div>
    )    
}

export default ProductDetails;