import {StyleSheet,FlatList} from "react-native"
//import Header from "../Header"
import categories_data from "../data/categories_data.json"
import CategoryItem from "../CategoryItem"

import { useSelector } from "react-redux"

    const categories = useSelector(state =>state.ShopReducer.category)

    const Categories = ({navigation})=>{


        const renderCategoryItem = ({item}) =>(
            <CategoryItem category={item} navigation={navigation}/>
        )
            
        return(
            <>
                <FlatList
                    data ={categories}
                    renderItem={renderCategoryItem}
                    keyExtractor={item=>item}
                
                />
            </>
            
        )
    }

    export default Categories;

    const styles = StyleSheet.create({
        
    })