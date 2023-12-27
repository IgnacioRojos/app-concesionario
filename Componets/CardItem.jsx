import { View, TouchableOpacity,Text,StyleSheet,Image } from "react-native";
import Card from "./Card";
import{Feather} from "@expo/vector-icons";



const CardItem = ({item}) =>{
    return(
        <Card style={styles.CartItemContainer}>
            <Image
                style={styles.imageCartItem}
                resizeMode="cover"
                source={{uri: item.images[0] }}            
            />
            <View>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardLightText}>{item.brand}</Text>
                <Text style={styles.cardLightText}>{item.price}</Text>
                <Text style={styles.cardTotalPrice}>
                    Cantidad: {item.quantity}, Total:${item.price*item.quantity}
                </Text>
            </View>
            <TouchableOpacity>
                <Feather name="trash" size={24} color="black"/>
            </TouchableOpacity>

        </Card>
    )

}


export default CardItem;


const styles = StyleSheet.create({
    CartItemContainer:{
        flexDirection:"row",
        alignItems:"center",
        padding:20,
    },
    imageCartItem:{
        height:50,
        width:50,
        marginRight:10,

    },
    cardTitle:{
        fontFamily:"Roboto-Regular",
        fontSize:20,
        textTransform:"capitalize"
    },
    cardLightText:{
        fontFamily:"Roboto-Regular",
        textTransform:"capitalize",
        fontSize:15
    },
    cardTotalPrice:{
        fontFamily:"Roboto-Regular",
        textTransform:"capitalize",
        fontSize:17
    }

})

