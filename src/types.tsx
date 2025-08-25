export type BoundingBox = [number, [number, number, number, number], number]

export interface Product {
    ID: string,
    Name: string,
    Price: number,
    image: string
}

export interface CartItem extends Product {
    quantity: number
} 

export interface CartState {
    items: CartItem[]
    total: number
    discount: number
}

