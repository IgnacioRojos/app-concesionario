import { Text,StyleSheet, View} from "react-native"
import { FlatList } from "react-native";
import ProductItem from "../ProductItem";
import { useEffect, useState } from "react";
import Search from "../Search";
import { useSelector } from "react-redux";
import { usegetcategoriesquery } from "../services/ShopServices";


const ProductByCategory = ({navigation, route})=>{


    const[productsByCategory, setProductsByCategory] = useState([])
    const[searchInput, setSearchInput] = useState("")



    const category = useSelector(state => state.ShopReducer.categorySelected)

    const {data: productsFilterByCategory, isloading, error} = usegetcategoriesquery(category)


    useEffect(()=>{

        if(!isloading){
            const productsValues = Object.value(productsFilterByCategory)
            const productsFilterByCategory = productsValues.filter(product =>product.category === category)
            const productFilter= productsFilterByCategory.filter(
                product=>product.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))
            setProductsByCategory(productFilter)
        }

     
    },[isloading,category,searchInput])


    const renderProductsItem =({item}) =>(
        <View style={styles.container}>
            <ProductItem product={item} navigation={navigation}/>
        </View>
            
    )
    const onSearch = () =>{
        setSearchInput(searchInput)
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