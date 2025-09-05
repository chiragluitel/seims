import {useEffect, useState} from 'react'
import type { User } from '../../types'

const useGetUserDetails = (userId: string) => {
    const [user, setUser] = useState<User>()
    const [isLoading, setIsLoading] = useState (true)
    const [error, setError] = useState(null)

    useEffect(()=> {
        const fetchFunction = async () => {
            try{
                setError(null)
                const result = await fetch(`${import.meta.env.VITE_AUTH_BASE_URL}/getUserDetails`)
                const data = await result.json()
                setUser(data[0]);
            }catch(error:any){
                console.error('An error occured in fetch:', error)
                setError(error);
            }finally{
                setIsLoading(false)
            }
        }

        fetchFunction();
    }, [userId])

    return {user, isLoading, error}
}

export default useGetUserDetails