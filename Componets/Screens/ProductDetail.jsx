import { View,Text,StyleSheet, ActivityIndicator,Image, useWindowDimensions, ScrollView} from "react-native"
import products_data from "../data/products_data.json"
import { useEffect, useState } from "react"
//import Header from "../Header"
import { TouchableOpacity } from "react-native"


const ProductDetail = ({route})=>{
    const [productSelect, setProductSelect] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isPortrait, setPortrait] = useState(true)

    const {height, width} = useWindowDimensions()

    const productId = route.params

    useEffect(()=>{
        height < width ? setPortrait(false) : setIsLoading(true)
    },[height])

    useEffect(()=>{
        const productFinder = products_data.find(product => product.id===productId)
        setProductSelect(productFinder)
        setIsLoading(false)

        

    },[productId])

    

    return(
        <>
            {
                isLoading?
                <ActivityIndicator/>
                :
                <>
                        <ScrollView>
                            <Image source={{uri: productSelect.images[0] }} resizeMode="cover"
                                style={isPortrait ? styles.imageProduct : styles.imageProductLandscape}
                            />
                            <View style={styles.detailContainer}>
                                <Text style={styles.title}>{productSelect.title}</Text>
                                <Text style={styles.description}>{productSelect.description}</Text>
                                <Text style={styles.price}>Precio: {productSelect.price}</Text>
                                <TouchableOpacity style={styles.buyButton} onPress={()=> null}>
                                    <Text style={styles.buyText}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>



                </>
            }
           
        </>
        
    )
}

export default ProductDetail;

const styles = StyleSheet.create({
    imageProductLandscape:{
        width:200,
        height:200
    },
    imageProduct:{
        minWidth:300,
        width:"100%",
        height:400,
    },
    title:{
        fontFamily: "Roboto-Bold",
        fontSize:32,
    },
    description:{
        fontSize:23,
        fontFamily: "Roboto-Bold"
    },
    price:{
        fontFamily: "Roboto-Bold",
        fontSize:32,
        color:"black"  
    },
    buyButton:{
        marginTop:10,
        width:200,
        padding:10,
        alignItems:"center",
        backgroundColor:"#9ccc65",
        borderRadius:10

    },
    detailContainer:{
        alignItems:"center"
    }
   

})


