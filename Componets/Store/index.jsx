import { configureStore } from "@reduxjs/toolkit";
import ShopReducer from "../Feactures/ShopSlice";


export default configureStore({
    reducer:{ShopReducer}
})