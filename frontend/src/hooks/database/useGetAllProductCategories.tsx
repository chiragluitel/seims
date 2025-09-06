import { useEffect, useState } from "react"
import type { ProductCategory } from "../../types"

const useGetAllProductCategories = () =>{ 
    const [categories, setCategories] = useState<ProductCategory[]>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(()=>{
        const getOneProduct = async () => {
            try{
                setError(null);
                const result = await fetch(`${import.meta.env.VITE_PRODUCTS_BASE_URL}/getAllProductCategories`)
                const data = await result.json();
                setCategories(data)
            }catch (error: any){
                setError(error)
            }finally{
                setLoading(false)
            }
        }

        getOneProduct();
    }, [])

    return {categories, loading, error}
}

export default useGetAllProductCategories