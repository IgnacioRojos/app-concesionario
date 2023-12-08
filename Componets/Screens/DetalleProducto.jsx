import { View,Text,StyleSheet} from "react-native"


const DetalleProducto = ()=>{

    return(
        <View style={styles.container}>
            <Text>DetalleProducto</Text>
        </View>
    )
}

export default DetalleProducto;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding:30,
    }

})