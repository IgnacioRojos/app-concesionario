import { View,TouchableOpacity,Text,StyleSheet,Image} from "react-native"


const ProductItem = ({product}) =>{
    return(
        <TouchableOpacity style={styles.ContainerProductItem}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Image style={styles.productImage} resizeMode="cover" source={{uri: product.thumbnail}} />
        </TouchableOpacity>
    )


}

export default ProductItem;

const styles = StyleSheet.create({
    ContainerProductItem:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        margin:10

    },
    productImage:{
        width:60,
        height:60,

    }


})