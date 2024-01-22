import { createSlice, current } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:{
        user:"useLogued",
        updateAt: Date.now().toLocaleString(),
        total: 0,
        items: []
    },
    reducers:{
        addItem: (state, action) =>{
            const isProductInCart = state.items.find(item =>item.id === action.payload.id)
            if(!isProductInCart){
                state.items.push(action.payload)
                const total = state.itemes.reduce(
                    (acc, current) => acc += current.price*current.quantity,0
                )
                state.total = total
                state = {
                    ...state,
                    total,
                    updateAt: Date.now().toLocaleString()
                }
            }else{
                const itemsUpdate = state.items.map(item =>{
                    if(item.id === action.payload.id){
                        item.quantity+=action.payload.quantity
                        return item
                    }
                    return item
                })
                const total = itemsUpdate.reduce(
                    (acc, current) =>acc += current.price * current.quantity,0
                )
                state.total = total
                state ={
                    ...state,
                    items: itemsUpdate,
                    total,
                    updateAt: Date.now().toLocaleString()
                }
            }

        },
        removeItem: (state, action) =>{

        },
        clearCart : (state) =>{
            state.items = [],
            state.total = 0
        }
    }
})


export const {addItem, removeItem} = CartSlice.actions


export default CartSlice.reducer