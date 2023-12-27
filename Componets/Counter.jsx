import { Pressable, TextInput, View, StyleSheet, TouchableOpacity} from "react-native"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import{incremet, decrement, incrementAmount, reset} from "../Componets/Feactures/Counter/CounterSlice"

const count = 0

const Counter = () =>{

    const[amountToAdd, setamountToAdd] = useState("")

    const autos = useSelector(state=> state.CounterReducer.value)

    const dispatch = useDispatch()
    
    const handleResetCount = () =>{
        dispatch(reset())
        setamountToAdd("")
    }






    return(
        <View style={styles.counterContainer}>
            <View style={styles.buttonUnitContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>dispatch(decrement())}>
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity>
          

                <Text style={styles.count}>{count}</Text>

           
                <TouchableOpacity style={styles.button} onPress={()=>dispatch(incremet())}>
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonAmountContainer} >
                <TextInput style={styles.textInput} 
                    placeholder="cantidad ah aumentar" 
                    keyboardType="numeric"
                    value={amountToAdd}
                    onChangeText={text => setamountToAdd(Number(text))}
                
                
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Aumentar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonConfirmContainer}>
                <TouchableOpacity style={styles.buttonReset} onPress={handleResetCount}>
                    <Text style={styles.text} >Resetear</Text>
                </TouchableOpacity>
            </View>



        </View>
    )


}

export default Counter;

const styles = StyleSheet.create({
    counterContainer:{
        gap:10,
        marginHorizontal:70,
        padding:20,
        borderColor: "#ccc",
        borderRadius:20,
        borderWidth:2,
        backgroundColor:"#EFEFEF"
    },
    buttonUnitContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    button:{
        backgroundColor:"#6c464e",
        padding:12
    },
    buttonReset:{
        backgroundColor:"#4a3f33",
        padding:12,
        textAlign:"center"
    },
    count:{
        width:"80%",
        textAlign:"center",
        fontSize:16
    },
    buttonAmountContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    textInput:{
        paddingRight:5
    }
    

    
})