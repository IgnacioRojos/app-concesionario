import {Colors} from "./Global/Colors"
import { View, StyleSheet } from "react-native";

const Card = ({children,style}) =>{
    return(
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
    )
}

export default Card;


const styles = StyleSheet.create({
    container:{
        shadowColor: Colors.secundary,
        shadowOffset:{
            width:10,
            height:10
        },
        elevation:5,
        shadowOpacity:1,
        shadowRadius:1


    }
})