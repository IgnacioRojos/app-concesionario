import { FlatList, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import cart_data from "../data/cart_data.json"
import CardItem from "../CardItem";
import { useEffect, useState } from "react";

const Cart = () =>{


    const[total,setTotal] = useState()


    useEffect(()=>{
        const totalCart= cart_data.reduce((acumulador, currentItem)=>{
            acumulador+=currentItem.price*currentItem.quantity
        },0)
        setTotal(totalCart)
    },[])

    const renderCartItem = ({item}) =>(
        <CardItem item={item}/>
    )
        

    return(
        <View style={styles.cartContainer}>
                <FlatList
                    data={cart_data}
                    renderItem={renderCartItem}
                    keyExtractor={item=>item.id}
                />
         

            <View style={styles.cartConfirm}>
                <Text style={styles.totalPrice}>Total:{total} </Text>
                <TouchableOpacity onPress={null} style={styles.confirmButton}>
                    <Text style={styles.textConfirm}>Confirmar</Text>
                </TouchableOpacity>

            </View>
        </View>
        
        

        
    )
}

export default Cart;


const styles = StyleSheet.create({
    cartContainer:{
        flex:1
    },
    cartConfirm:{
        marginBottom:130,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:25
    },
    totalPrice:{
        fontSize:16,
        fontFamily:"Roboto-Regular",
        color:"white"
    },
    confirmButton:{
        backgroundColor:"white",
        padding:10,
        borderRadius:10
    },
    textConfirm:{
        fontFamily:"Roboto-Regular",
        fontSize:16,
        color:"white"
    }

})