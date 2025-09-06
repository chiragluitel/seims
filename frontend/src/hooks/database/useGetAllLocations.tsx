import { useEffect, useState } from "react"
import type { Location } from "../../types"

const useGetAllLocations = () =>{ 
    const [locations, setLocations] = useState<Location[]>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(()=>{
        const getOneProduct = async () => {
            try{
                setError(null);
                const result = await fetch(`${import.meta.env.VITE_SHOPFLOOR_BASE_URL}/getAllLocations`)
                const data = await result.json();
                setLocations(data)
            }catch (error: any){
                setError(error)
            }finally{
                setLoading(false)
            }
        }

        getOneProduct();
    }, [])

    return {locations, loading, error}
}

export default useGetAllLocations