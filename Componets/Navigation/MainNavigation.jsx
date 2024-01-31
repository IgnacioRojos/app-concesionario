import { NavigationContainer } from "@react-navigation/native";
import NewTabNavigation from "./NewTabNavigation";
import AuthNavigation from "./AuthNavigation";
import { useDispatch, useSelector } from "react-redux";
import {usegetProfilePicturequery} from "../services/ShopServices"
import { useEffect } from "react";
import { setProfileUser,setUserLocation } from "../Feactures/AuthSlice";
import { useGetUserLocation } from "../services/ShopServices";
import { fetchSession } from "../DB/Index";



const MainNavigation = () =>{
    const user = useSelector(state=>state.authReducer.user)

    const localId = useSelector(state => state.authReducer.localId)

    const {data, error, isLoading} = usegetProfilePicturequery(localId)
    const {data: locationData, error:locationError,isLoading: locationIsLoading }= useGetUserLocation(localId)

    const dispatch = useDispatch()

    useEffect(()=>{
        if(data){
            dispatch(setProfileUser(data.image))
        }
        if(locationData){
            dispatch(setUserLocation(locationData))
        }
    },[data, locationData,isLoading,locationIsLoading  ])


    useEffect(()=>{
        (async ()=>{
            try{
                const session = await fetchSession()
                console.log("sessions:", session)
                if(session?.rows.legth){
                    console.log("se han encontrado datos del cliente")
                    const user = session.rows_array[0]
                    dispatch(setUser(user))
                }
            }catch(error){
                console.log("error al obtener datos del cliente local",error.message)
            }
        })()
    },[])



    return (
        <NavigationContainer>
            {user && !isLoading ? <NewTabNavigation/> : <AuthNavigation/>}
        </NavigationContainer>
    )
}


export default MainNavigation;