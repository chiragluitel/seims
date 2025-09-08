import { useEffect, useState } from "react"
import type { Product } from "../../types"

const useGetOneProduct = (sku: string | undefined) =>{ 
    const [product, setProduct] = useState<Product>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(()=>{
        const getOneProduct = async () => {
            try{
                setError(null);
                console.log('Hook Triggered, SKU:', sku)
                const result = await fetch(`${import.meta.env.VITE_PRODUCTS_BASE_URL}/getOneProduct?sku=${sku}`)
                console.log('Result: ', result)
                const data = await result.json();
                console.log('DATA: ', data)
                setProduct(data[0])
            }catch (error: any){
                setError(error)
            }finally{
                setLoading(false)
            }
        }

        getOneProduct();
    }, [sku])

    return {product, loading, error}
}

export default useGetOneProduct