import { useState } from "react"
import type { Product } from "../../types"

const useUpdateOneProduct = () =>{ 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
        const updateOneProduct = async (product: Product) => {
            try{
                setError(null);
                setLoading(true)
                const locationCheck = product.location.id? product.location.id : null;
                const result = await fetch(`${import.meta.env.VITE_PRODUCTS_BASE_URL}/createProduct`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        'product_id': product.id,
                        'sku':product.sku,
                        'product_name':product.name,
                        'product_description': product.description,
                        'product_longdescription': product.long_description,
                        'product_instore_price': product.instore_price_cents,
                        'product_online_price':product.online_price_cents,
                        'product_soh':product.soh_cents,
                        'product_location':locationCheck,
                        'product_category':product.category.id,
                        'product_image': product.image,
                        'product_barcode':product.barcode
                    })
                })
                return (result)
            }catch (error: any){
                setError(error)
            }finally{
                setLoading(false)
            }
        }

    return {updateOneProduct, loading, error}
}

export default useUpdateOneProduct;
