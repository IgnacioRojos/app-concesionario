import { View,Text,StyleSheet} from "react-native"


const Header = ({title})=>{

    return(
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding:30,
    }

})