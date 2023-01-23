import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './cart-slice/CartSlice'
const store = configureStore({
    reducer:{
        cart:CartReducer,

    }
})


export default store