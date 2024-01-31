import { createSlice, current } from "@reduxjs/toolkit";


export const AuthSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        token: null,
        profileUser: null,
        localId: null,
        location:{
            latitude: null,
            longitude: null,
            address : null
        }
    },
    reducers:{
        setUser: (state, action) =>{
             state.user = action.payload.email,
             state.token = action.payload.idToken
             state.localId = action.payload.localId
        },
        clearUser: state => {
            state.user = null,
            state.token = null
        },
        setProfileUser: (state, action) =>{
            state.profileUser = action.payload
        },
        setUserLocation: (state, action) =>{
            state.location = {
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
                address: action.payload.address,
            }
        },
        logout:(state) =>{
            state.user = null,
            state.token = null,
            state.localId = null,
            state.profileUser = null,
            state.location = null
        }
    }

})


export const {setUser,clearUser,setProfileUser, setUserLocation,logout} = AuthSlice.actions


export default AuthSlice.reducer