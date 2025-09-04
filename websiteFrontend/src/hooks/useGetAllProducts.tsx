import {useState, useEffect} from 'react'
import type { Product } from '../types'
const useGetAllProducts = () =>{

    const [products, setProducts] = useState <Product[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchFunction = async ()=>{
            try{
                setError(null);
                const result = await fetch(`${import.meta.env.VITE_PRODUCTS_BASE_URL}/getAllProducts`);
                const data = await result.json()
                setProducts(data);
            }catch(error:any){
                console.error('An Error Occured During Fetch: ', error )
                setError(error);
            }finally{
                setIsLoading(false)
            }
        }

        fetchFunction();
    }, [])

    return {products, isLoading, error};
}

export default useGetAllProducts;