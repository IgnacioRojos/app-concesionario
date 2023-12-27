import { StyleSheet,Text,TouchableOpacity,View,Image } from "react-native";
import Card from "./Card";
import {Feather} from "@expo/vector-icons";



const OrderItem = ({order,total}) =>{
    
    
    
    return(
        <Card style={styles.cartItemContainer}>
            <View>
                <Text style={styles.createAt}>
                    Creada el{new Date(order.createAt).toLocaleString()}
                </Text>
                <Text style={styles.total}>Total:${total}</Text>
            </View>
            <TouchableOpacity>
                <Feather name="search" size={24} color="black"/>
            </TouchableOpacity>
        </Card>

    )
}


export default OrderItem;


const styles = StyleSheet.create({


})



