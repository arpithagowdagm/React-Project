import { configureStore } from "@reduxjs/toolkit";
import cartslice from './cartSlice';

const appStore = configureStore({
    reducer:{
        cart:cartslice,
    }
})

export default appStore;