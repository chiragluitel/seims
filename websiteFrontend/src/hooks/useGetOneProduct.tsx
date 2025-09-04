import { useEffect, useState } from "react"
import type { Product } from "../types";

const useGetOneProduct = (productId: string | undefined) =>{ 
    const [product, setProduct] = useState<Product>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(()=>{
        const getOneProduct = async () => {
            try{
                setError(null);
                const result = await fetch(`${import.meta.env.VITE_PRODUCTS_BASE_URL}/getOneProduct?productId=${productId}`)
                const data = await result.json();
                setProduct(data[0])
            }catch (error: any){
                setError(error)
            }finally{
                setLoading(false)
            }
        }

        getOneProduct();
    }, [productId])

    return {product, loading, error}
}

export default useGetOneProduct