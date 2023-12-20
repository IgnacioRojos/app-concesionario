import { Text,StyleSheet, View} from "react-native"
import products_data from "../data/products_data.json"
import { FlatList } from "react-native";
import ProductItem from "../ProductItem";
//import Header from "../Header";
import { useEffect, useState } from "react";
import Search from "../Search";


const ProductByCategory = ({navigation, route})=>{


    const[productsByCategory, setProductsByCategory] = useState([])
    const[search,setSearch] = useState("")

    const {category} = route.params

    console.log(route.params)

    useEffect(()=>{
        const productsFilterByCategory = products_data.filter(product =>product.category === category)
        const productFilter= productsFilterByCategory.filter(
            product=>product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        setProductsByCategory(productFilter)
    },[category,search])


    const renderProductsItem =({item}) =>(
        <View style={styles.container}>
            <ProductItem product={item} navigation={navigation}/>
        </View>
            
    )
    const onSearch = () =>{
        setSearch(search)
    }


    return(
        <>
            <Search onSearchEvent={onSearch}/>
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