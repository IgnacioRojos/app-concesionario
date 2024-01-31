import { View, Text, StyleSheet, TouchableOpacity} from "react-native"
import { AntDesign } from '@expo/vector-icons'; 
import {Colors} from "./Global/Colors"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./Feactures/AuthSlice";
import { deleteSession } from "./DB/Index";


const Header = ({title,navigation})=>{


    const email = useSelector(state => state.authReducer.user)
    const localId = useSelector(state => state.authReducer.localId)

    const dispatch = useDispatch()

    const onLogout = () =>{
        dispatch(logout())
        const delteted = deleteSession(localId)

    }

    return(
        <View style={styles.container}>
            {   
                navigation.canGoBack()
                    ?

                    <TouchableOpacity onPress={navigation.goBack}>
                        <AntDesign name="leftcircle" size={24} color="black" style={styles.button} />
                    </TouchableOpacity>
                    :
                    <View></View> 
            }
            
            
            <Text style={styles.title}>{title}</Text>
            {
                email &&
                <TouchableOpacity onPress={onLogout}>
                    <AntDesign name="logout" size={20} color="white"/>
                </TouchableOpacity>
            }
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        height:100,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:Colors.header
    },
    title: {
        color:"#000000",
        fontFamily: "Roboto-Bold",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"center",
        marginLeft:100,
        fontSize:15
    },
    button:{
      marginLeft:10  
    }

    
})