import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./autherisation/authSlice";
import coinReducer from "./coins/coinSlice";
import cartReducer from "./cart/cartSlice"
const store = configureStore({
    reducer : {
        auth : authReducer,     
        coins : coinReducer, 
        cart: cartReducer,
    }
})
export default store