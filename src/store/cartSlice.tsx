import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem, CartState, Product } from "../types";

const initialState: CartState = {
    items: [{ID:"Hey", Name:"Chirag", Price:10, quantity:1}, {ID:"Heyy", Name:"Chirag2", Price:20, quantity:1}],
    total: 0,
    discount: 0
}

const calculateTotal = (items: CartItem[]): number => {
    return items.reduce((total, item) => total + item.Price * item.quantity, 0);
  };
  
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action:PayloadAction<Product>) => {
            const productToAdd = action.payload;

            const existingItem = state.items.find(item => item.ID == productToAdd.ID);

            if(existingItem){
                existingItem.quantity += 1;
            }else{
                state.items.push({...productToAdd, quantity:1})
            }
            state.total = calculateTotal(state.items)
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            const idToRemove = action.payload;
            state.items = state.items.filter(item => item.ID !== idToRemove);
            state.total = calculateTotal(state.items);
        },

        updateQuantity: (state, action: PayloadAction<{ id: string, quantity: number }>) => {
            const { id, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.ID === id);
      
            if (itemToUpdate && quantity > 0) {
              itemToUpdate.quantity = quantity;
            } else if (itemToUpdate && quantity === 0) {
              // Optional: Remove item if quantity becomes 0
              state.items = state.items.filter(item => item.ID !== id);
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