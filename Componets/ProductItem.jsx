import { View,TouchableOpacity,Text,StyleSheet,Image} from "react-native"
import { useDispatch } from "react-redux";
import { setProductIdSelected } from "./Feactures/ShopSlice";


const ProductItem = ({product, navigation}) =>{

    const dispatch = useDispatch()
    return(
        <TouchableOpacity onPress={()=>{navigation.navigate('Detalle Auto', product.id)
            dispatch(setProductIdSelected(product.id))
            }}
            
            style={styles.ContainerProductItem}>
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