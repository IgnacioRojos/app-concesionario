import {StyleSheet,FlatList} from "react-native"
import categories_data from "../data/categories_data.json"
import CategoryItem from "../CategoryItem"
import { useSelector } from "react-redux"

    

    const Categories = ({navigation})=>{

        const categories = useSelector(state =>state.ShopReducer.category)


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