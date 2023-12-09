import { View,Text,StyleSheet} from "react-native"


const Header = ({title})=>{

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        height:100,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#9FA4C4"
    },
    title: {
        color:"#000000",
        fontFamily: "Roboto-Bold"
    }

})