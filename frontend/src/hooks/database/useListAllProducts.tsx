import { useEffect, useState } from "react"
import type { Product } from "../../types";


const useListAllProducts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState<Product[]>([])
    useEffect(()=>{
        const getAllProducts = async () =>{
            try{
                setError(null);
                setIsLoading(true);
                const result = await fetch(`${import.meta.env.VITE_PRODUCTS_BASE_URL}/getAllProducts`)
                const data = await result.json();
                setProducts(data)
            }catch(error:any){
                setError(error);
                console.error('An error occured when trying to get all products')
            }finally{
                setIsLoading(false)
            }
        }

        getAllProducts();
    }, [])

    return {isLoading, error, products}
}

export default useListAllProducts;