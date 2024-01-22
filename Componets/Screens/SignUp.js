import { View,TouchableOpacity,StyleSheet , KeyboardAvoidingView} from "react-native";
import Input from "../Input";
import { Colors } from "../Global/Colors";
import { useState,useEffect } from "react";
import { userSignUpMutation } from "../services/AuthServices";
import { useDispatch } from "react-redux";
import { setUser } from "../Feactures/AuthSlice";
import { signUpSchema } from "../Validations/SingUpSchema";


const SignUp = ({navigation}) =>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [erroremail,setErrorEmail] = useState("")
    const [errorpassword,setErrorPassword] = useState("")
    const [errorconfirmPassword,setErrorConfirmPassword] = useState("")

    const [triggerSingUp,result] = userSignUpMutation()


    const onSubmit = () =>{
        setErrorEmail("")
        setErrorPassword("")
        setErrorConfirmPassword("")
        try{
            signUpSchema.validateSync({email,password,confirmPassword}, {abortEarly:false})
            triggerSingUp({email, password})
        }catch(error){
            console.log(error)
            error.errors.map(e=>{

                const customError = object.value(e)[0]
                switch(object.value(e)[0]){
                    case "empty_mail":
                        setErrorEmail(customError) 

                    case "empty_password":
                        setErrorPassword(customError)
                        
                    case "invalid_mail":
                        setErrorEmail(customError)

                    case "invalid_password":
                        setErrorPassword(customError)
                    
                    case "invalid_confirm_password":
                        setErrorConfirmPassword(customError)

                    case "invalid_match_password":
                        setErrorConfirmPassword(customError)
                    default:
                        break
                    
                }

            })
            

          
        }

       
    }

    const dispach = useDispatch()

    useEffect(()=>{
        if(result.data){
            dispach(setUser(result.data))
        }

    },[result])



    return(
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <Input
                label="email:"
                onChange = {setEmail}
                error={erroremail}
            />

            <Input
                label="contraseña:"
                onChange = {setPassword}
                error={errorpassword}
                isSecure={true}
            />

            <Input
                label="Repetir contraseña:"
                onChange = {setConfirmPassword}
                error={errorconfirmPassword}
                isSecure={true}
            />

            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                <Text style={styles.btnText}> Ingresar </Text>
            </TouchableOpacity>

            <View style={styles.altContainer}>

                <Text style={styles.subtitle}>¿No posee Cuenta?</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
                    <Text style={styles.subtitleLink}>Crear Una</Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>

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
