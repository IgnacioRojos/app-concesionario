import { View,Text,StyleSheet,TouchableOpacity} from "react-native"
import { AntDesign } from '@expo/vector-icons'; 


const Header = ({title,navigation})=>{

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={navigation.goBack}>
                <AntDesign name="back" size={24} color="black" />
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
        justifyContent:"space-between",
        paddingHorizontal:30,
        alignItems:"center",
        backgroundColor:"#9FA4C4"
    },
    title: {
        color:"#000000",
        fontFamily: "Roboto-Bold"
    }

})