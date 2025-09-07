import type { Product } from "./types"

export const GST = 10
export const sample_product: Product = {
    id: 'CI-NEPSTRADING-LYNVIC-WAIWAI',
    sku: '10001', 
    name: 'Wai Wai 250G',
    description: 'Classical Nepali Noodles',
    long_description: "Nepal's Favorite Noodles for over 250 Years. Unbeatable Taste.",
    instore_price: 10.99, 
    online_price: 9.99,
    discounted_price: 9.99,
    soh: 35,
    ordered_quantity: 45,
    location: {id: 'f68fe6ae-2f6b-467e-b5d2-de53bb1075b9', name: 'Rack 1'},
    category: {id: 'Grocery', name: 'Grocery'},
    image: 'https://seims-image-bucket.s3.ap-southeast-2.amazonaws.com/seims/CI-NEPSTRADING-LYNVICAUS/logoexample.jpg',
    barcode: ''
}