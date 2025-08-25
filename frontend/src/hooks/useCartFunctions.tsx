
import { addToCart, applyDiscount, clearCart, removeFromCart, updateQuantity,  } from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks"
import type { Product } from "../types";

export const useCartFunctions = () =>{
    const dispatch = useAppDispatch();

    const items = useAppSelector(state=>state.cart.items)
    const discount = useAppSelector(state => state.cart.discount)
    const total = useAppSelector(state=>state.cart.total)

    const addItem = (product:Product) => {
        dispatch(addToCart(product))
    }

    const removeItem = (id : string) =>{
        dispatch(removeFromCart(id))
    }

    const setQuantity = (id:string, quantity: number)=>{
        dispatch(updateQuantity({id, quantity}))
    }

    const emptyCart = () => {
        dispatch(clearCart());
    }

    const addDiscount = (amount: number) => {
        dispatch(applyDiscount({amount}))
    }

    const totalItems = items.reduce((sum, item) => sum + item.quantity,0)

    return {
        //State
        items, total, totalItems, discount,
        //Actions 
        addItem,
        removeItem,
        setQuantity,
        emptyCart,
        addDiscount
    }
}