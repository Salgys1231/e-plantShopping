import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items:[]
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
         const item = action.payload; 
         const existingItem = state.items.find(i => i.name === item.name);
            if (existingItem) {
            existingItem.quantity+= 1;
        } else {
         state.items.push({ ...item, quantity: 1 });
        }
        },

    removeItem: (state, action) => {
        const nameToRemove = action.payload;
        state.items = state.items.filter(i => i.name !== nameToRemove);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const item = state.items.find(i => i.name === name);  
        if (item && quantity > 0) {
            item.quantity = quantity;
        }else {
            state.items = state.items.filter(i => i.name !== name);
        }
    }
    }
  });

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
