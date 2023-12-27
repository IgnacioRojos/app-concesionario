import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Feactures/Counter/CounterSlice";


export default configureStore({
    reducer:{CounterReducer}
})