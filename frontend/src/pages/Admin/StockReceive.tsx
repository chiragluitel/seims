import { useState } from "react";
import ProductIdInput from "../../components/WMS/stockReceive/productIdInput";
import SearchResults from "../../components/WMS/stockReceive/searchResult";
import useGetOneProduct from "../../hooks/database/useGetOneProduct";
import OptionCard from "../../components/WMS/MainPage/optionCard";
import { FiPlus } from "react-icons/fi";

const StockReceive = () =>{
    const [productId, setProductId] = useState('')
    const [isFirstSearch, setIsFirstSearch] = useState(true)
    const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
       setProductId(formData.get('productId') as string);
       setIsFirstSearch(false);
    }   

    const {product} = useGetOneProduct(productId);
    return (
        <>
            <div>
                <h1 className="text-3xl font-bold mb-6"> Receive Stock </h1>
                <ProductIdInput onSubmit={onSearchSubmit} />
                {isFirstSearch && (<div> Search or Scan an Item</div>)}
                
                {!isFirstSearch && 
                (product  ? (
                <div>
                    <h1> Successfully Retrieved Data! </h1>
                    <SearchResults productId= {product.id}/>
                    <OptionCard label="Add Stock" navigateTo="/addStock/" icon={<FiPlus />} />
                </div> 
                
                ):(
                <h1> No Result Found, please try a different ID. </h1>)) }
            </div>
            
        </>
    )
}

export default StockReceive ;