                            //   ID,    [Bounding Box Coordinates XYXY], Lable
export type DetectionResults = [number, [number, number, number, number], string]

export interface DetectedObject{
    id: number,
    label: string
}

export interface Product {
    id: string,
    sku: string, 
    name: string,
    description: string,
    long_description: string,
    instore_price: number, 
    online_price: number,
    discounted_price: number,
    soh: number,
    ordered_quantity: number,
    location: Location,
    category: ProductCategory,
    image: string,
    barcode: string
}

export interface CartItem extends Product {
    quantity: number
} 

export interface CartState {
    items: CartItem[]
    total: number
    discount: number
}

export interface User {
    name: string,
    organisation: string, 
    job_title: string,
    hashed_password: string
}

export interface ProductCategory {
    id: string,
    name: string
}
export interface Location {
    id: string,
    name: string
}