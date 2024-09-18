import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./wishlistSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
    wishlistReducer:wishlistSlice,
    cartReducer:cartSlice

    }
})
export default store;