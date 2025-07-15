import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Manages all cart-related state
  },
});

export default store;