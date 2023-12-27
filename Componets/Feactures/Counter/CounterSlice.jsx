/*import {createSlice} from "@reduxjs/toolkit";


export const CounterSlice = createSlice({
    name: "counter",
    initialState:{
        value: 0
    },
    reducers:{
        incremet: state =>{
            state.value +=1
        },
        decrement: state =>{
            if(state.value > 0){
                state.value -= 1 
            }
            
        },
        incrementAmount:(action, state)=>{
            state.value = action.payload
        },
        reset: state =>{
            state.value = 0
        }
    }



})

export const {incremet, decrement, incrementAmount, reset} = CounterSlice.actions


export default CounterSlice.reducer*/