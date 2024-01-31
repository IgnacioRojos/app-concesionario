import { FlatList, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import CardItem from "../CardItem";
import { useSelector } from "react-redux";
import { usePostOrder } from "../services/ShopServices";

const Cart = () =>{


    const cartItems = useSelector(state =>state.cartReducer.items)
    const total = useSelector(state =>state.cartReducer.total)
    const [triggerPost, result] = usePostOrder


    const confirmCart = () =>{
        triggerPost({total, cartItems, user:"loggedUser"})
    }


    const renderCartItem = ({item}) =>(
        <CardItem item={item}/>
    )
        

    return(
        <View style={styles.cartContainer}>
                <FlatList
                    data={cartItems}
                    renderItem={renderCartItem}
                    keyExtractor={item=>item.id}
                />
         

            <View style={styles.cartConfirm}>
                <Text style={styles.totalPrice}>Total:{total} </Text>
                <TouchableOpacity onPress={confirmCart} style={styles.confirmButton}>
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