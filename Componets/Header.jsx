import { View, Text, StyleSheet, TouchableOpacity} from "react-native"
import { AntDesign } from '@expo/vector-icons'; 
import {Colors} from "./Global/Colors"


const Header = ({title,navigation})=>{

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={navigation.goBack}>
                        <AntDesign name="leftcircle" size={24} color="black" style={styles.button} />
                    </TouchableOpacity>
            
            <Text style={styles.title}>{title}</Text>
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