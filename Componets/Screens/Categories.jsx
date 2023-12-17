import {StyleSheet,FlatList} from "react-native"
//import Header from "../Header"
import categories_data from "../data/categories_data.json"
import CategoryItem from "../CategoryItem"




const Categories = ({navigation})=>{
    const renderCategoryItem = ({item}) =>(
        <CategoryItem category={item} navigation={navigation}/>
    )
        
    return(
        <>
            <FlatList
                data ={categories_data}
                renderItem={renderCategoryItem}
                keyExtractor={item=>item}
            
            />
        </>
        
    )
}

export default Categories;

const styles = StyleSheet.create({
    
})