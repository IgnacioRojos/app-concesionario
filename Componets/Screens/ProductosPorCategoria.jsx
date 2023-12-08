import { View,Text,StyleSheet} from "react-native"


const ProductosPorCategoria = ()=>{

    return(
        <View style={styles.container}>
            <Text>ProductosPorCategoria</Text>
        </View>
    )
}

export default ProductosPorCategoria;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding:30,
    }

})