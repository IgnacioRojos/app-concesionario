import { View,Text,StyleSheet} from "react-native"


const Categoria = ()=>{

    return(
        <View style={styles.container}>
            <Text>Categoria</Text>
        </View>
    )
}

export default Categoria;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding:30,
    }

})