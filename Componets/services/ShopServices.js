import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"; 
import {base_url} from  "../firebase/DataBase"


export const shopApi = createApi ({
	reducerPath: "shopApi",
	baseQuery: fetchBaseQuery({baseUrl: base_url}),
	endpoints: (builder) =>({

    getProducts: builder.query({
        query: () => `products.json`,
    }),

	getCategories: builder.query ({
		query: () => `categories.json`,
	}),
	
	getproductbycategory: builder.query ({
		query: (category) => `product.json?orderby="category"&equalto="${category}"`,	
	})

	}),

	postProfilePicture: builder.mutation({
		query:({image, localId}) =>({
			url:`profilePictures/${localId}.json`,
			method:"PUT",
			body:{
				image:image,
			}
		})

		
	}),

	getProfilePicture: builder.query({
		query: (localId) =>`profilePictures/${localId}.json`
	}),

	postOrder: builder.mutation({
		query: ({...order}) =>({
			url: "orders.json",
			method:"POST",
			body: order
		})
	}),
	getUserLocation: builder.query({
		query:(localId) =>`location/${localId}.json`
	}),
	postUserLocation: builder.mutation({
		query: ({location, localId}) =>({
			url: `locations/${localId}.json`,
			method:"PUT",
			body: {
				latitude : location.latitude,
				longitude: location.longitude,
				address: location.address
			}
		})
	})
	

})


export const {usegetproductsquery, usegetcategoriesquery, usegetproductbycategoryQuery, usePostOrder, usepostProfilePicture, usegetProfilePicturequery,useGetUserLocation, usePostUserLocation} = shopApi