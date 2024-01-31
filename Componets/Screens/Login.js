import { View,TouchableOpacity,StyleSheet } from "react-native";
import Input from "../Input";
import { Colors } from "../Global/Colors";
import { uselogInMutation } from "../services/AuthServices";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../Feactures/AuthSlice";
import { insertSession } from "../DB/Index";


const SignUp = ({navigation}) =>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [triggerlogIn,result] =uselogInMutation ()


    const onSubmit = () =>{
        triggerlogIn({email, password})
    }
    
    const dispach = useDispatch()

    useEffect(()=>{
        if(result.data){
            dispach(setUser(result.data))
        }
        insertSession({
            email: result.data.email,
            localId: result.data.localId,
            token: result.data.token
        })
        .then(result => console.log(result))
        .catch(error =>console.log(error.message))

    },[result])



    return(
        <View style={styles.container}>
            <Input
                label="email:"
                onChange = {setEmail}
                error=""
            />

            <Input
                label="contraseña:"
                onChange = {setPassword}
                error=""
                isSecure={true}
            />


            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                <Text style={styles.btnText}> Ingresar </Text>
            </TouchableOpacity>

            <View style={styles.altContainer}>

                <Text style={styles.subtitle}>¿No posee Cuenta?</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate("SignUp")}}>
                    <Text style={styles.subtitleLink}>Crear Una</Text>
                </TouchableOpacity>

            </View>

        </View>

    )
    


}

export default SignUp ;

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.primary,
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        gap:10,
    },
    btn:{
        padding:10,
        backgroundColor: Colors.secundary,
        borderRadius:8,
        margin: 5,
    },
    btnText:{
        color:"#fff",
        fontFamily:"Roboto-Bold",

    },
    altContainer:{
        flexDirection:"row",
        gap:5,
        justifyContent:"center",
        alignItems:"center",
        marginTop:50,
    },
    subtitle:{
        color:"#fff",
        fontFamily:"Roboto-Bold",
        fontSize:12,
    },
    subtitleLink:{
        fontFamily:"Roboto-Regular",
        color:"#fff",
        fontSize:11,
        textDecorationLine:"underline"
    }



})
