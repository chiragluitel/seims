import useGetOneProduct from "../../../hooks/database/useGetOneProduct"
import ProductDetailedCard from "./ProductDetailedCard";

interface SearchResultsProps{
    productId: string
}

const SearchResults: React.FC<SearchResultsProps> = ({productId}) =>{
    const {product} = useGetOneProduct(productId);
    console.log(product)
    return(
        <>
            {product && 
            <div>
                    <ProductDetailedCard product = {product} /> 
            </div>
            }
        </>
    )
}

export default SearchResults;