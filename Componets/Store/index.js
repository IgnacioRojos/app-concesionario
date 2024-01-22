import { configureStore } from "@reduxjs/toolkit";
import ShopReducer from "../Feactures/ShopSlice";
import CartReducer from "../Feactures/CartSlice";
import { AuthApi } from "../services/AuthServices";
import { shopApi } from "../services/ShopServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import AuthReducer from "../Feactures/AuthSlice";

const store = configureStore({
    reducer:{
        ShopReducer,
        CartReducer,
        AuthReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [AuthApi.reducerPath]:AuthApi.reducer
    },
    middleware: (getdefaultmiddleware) =>
	        getdefaultmiddleware().concat(shopApi.middleware).concat(AuthApi.middleware)
})

setupListeners(store.dispatch)

export default store;