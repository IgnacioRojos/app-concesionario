import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_auth_url, API_KEY } from "../firebase/DataBase";

export const AuthApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_auth_url }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: `accounts:signUp?key=${API_KEY}`,
        method: "POST",
        body: { ...userData, returnSecureToken: true },
      }),
    }),
    logIn: builder.mutation({
      query: (userData) => ({
        url: `accounts:signInWithPassword?key=${API_KEY}`,
        method: "POST",
        body: { ...userData, returnSecureToken: true },
      }),
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation } = AuthApi;
