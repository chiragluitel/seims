import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem, CartState, Product } from "../types";

const initialState: CartState = {
    items: [],
    total: 0,
    discount: 0
}

const calculateTotal = (items: CartItem[]): number => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action:PayloadAction<Product>) => {
            const productToAdd = action.payload;

            const existingItem = state.items.find(item => item.id == productToAdd.id);

            if(existingItem){
                existingItem.quantity += 1;
            }else{
                state.items.push({...productToAdd, quantity:1})
            }
            state.total = calculateTotal(state.items)
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            const idToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== idToRemove);
            state.total = calculateTotal(state.items);
        },

        updateQuantity: (state, action: PayloadAction<{ id: string, quantity: number }>) => {
            const { id, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.id === id);
      
            if (itemToUpdate && quantity > 0) {
              itemToUpdate.quantity = quantity;
            } else if (itemToUpdate && quantity === 0) {
              // TODO: Fix 0 bug
              state.items = state.items.filter(item => item.id !== id);
            }
      
            state.total = calculateTotal(state.items);
        },

        applyDiscount: (state, action:PayloadAction<{amount:number}>) => {
            const { amount } = action.payload;
            state.discount = amount;
        },

        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        }
          
    }
} );

export const {addToCart, removeFromCart, updateQuantity, clearCart, applyDiscount} = cartSlice.actions

export default cartSlice.reducer;