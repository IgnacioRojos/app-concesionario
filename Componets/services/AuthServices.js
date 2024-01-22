import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"; 
import { base_auth_url } from "../firebase/DataBase";


export const AuthApi = createApi ({
	reducerPath: "shopApi",
	baseQuery: fetchBaseQuery({baseUrl: base_auth_url}),
	endpoints: (builder) =({
        signUp:builder.mutation({
            query : ({...userData}) => ({
                url:`accounts:signInWithCustomToken?key=${API_KEY}`,
                method:"POST",
                body: userData
            })

            
        }),
        logIn:builder.mutation({
            query : ({...userData}) => ({
                url:`accounts:signInWithPassword?key=${API_KEY}`,
                method:"POST",
                body: userData
            })
        })
    })

})


export const {userSignUpMutation, uselogInMutation} = AuthApi