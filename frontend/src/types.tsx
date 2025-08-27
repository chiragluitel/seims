                            //   ID,    [Bounding Box Coordinates XYXY], Lable
export type DetectionResults = [number, [number, number, number, number], string]
                              //ID  , Label
export interface DetectedObject{
    id: number,
    label: string
}

export interface Product {
    id: string,
    name: string,
    price: number,
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

