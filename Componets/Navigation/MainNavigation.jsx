import { NavigationContainer } from "@react-navigation/native";
import NewTabNavigation from "./NewTabNavigation";
import AuthNavigation from "./AuthNavigation";
import { useDispatch, useSelector } from "react-redux";
import {usegetProfilePicturequery} from "../services/ShopServices"
import { useEffect } from "react";
import { setProfileUser } from "../Feactures/AuthSlice";



const MainNavigation = () =>{
    const user = useSelector(state=>state.authReducer.user)

    const localId = useSelector(state => state.authReducer.localId)

    const {data, error, isLoading} = usegetProfilePicturequery(localId)

    const dispatch = useDispatch()

    useEffect(()=>{
        if(data){
            dispatch(setProfileUser(data.image))
        }
    },[data])



    return (
        <NavigationContainer>
            {user && !isLoading ? <NewTabNavigation/> : <AuthNavigation/>}
        </NavigationContainer>
    )
}


export default MainNavigation;