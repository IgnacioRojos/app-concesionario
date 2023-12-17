import { Text,StyleSheet, View} from "react-native"
import products_data from "../data/products_data.json"
import { FlatList } from "react-native";
import ProductItem from "../ProductItem";
//import Header from "../Header";
import { useEffect, useState } from "react";


const ProductByCategory = ({navigation, route})=>{


    const[productsByCategory, setProductsByCategory] = useState([])

    const {category} = route.params

    console.log(route.params)

    useEffect(()=>{
        const productsFilterByCategory = products_data.filter(product =>product.category === category)
        setProductsByCategory(productsFilterByCategory)
    },[category])


    const renderProductsItem =({item}) =>(
        <View style={styles.container}>
            <ProductItem product={item} navigation={navigation}/>
        </View>
            
    )


    return(
        <>
            <FlatList
                data={productsByCategory}
                renderItem={renderProductsItem}
                keyExtractor={item=>item.id}
            />
        </>
        

       
    )
}

export default ProductByCategory;

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})