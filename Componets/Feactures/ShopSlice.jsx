import { createSlice } from "@reduxjs/toolkit";
import products_data from "../data/products_data.json";
import category_data from "../data/categories_data.json";

export const ShopSlice = createSlice ({
    name:"Shop",
    initialState:{
        categorySelected: "",
        productIdSelected: null,
        product: products_data,
        category: category_data,
        productsByCategory: []
    },
    reducers:{
        setCategorySelected: (state, action) =>{
            state.value.setCategorySelected = action.payload
            state.productsByCategory = state.product.filter(product => product.category === state.categorySelected)
        },
        setProductIdSelected:(state, action) =>{
            state.value.productIdSelected= action.payload
        }
    }
})

export const {setCategorySelected, setProductIdSelected} = ShopSlice.actions


export default ShopSlice.reducer