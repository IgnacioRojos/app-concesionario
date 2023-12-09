import {StyleSheet,FlatList} from "react-native"
import Header from "../Header"
import categories_data from "../data/categories_data.json"
import CategoryItem from "../CategoryItem"



const Categories = ({onSelectCategoryEvent})=>{
    const renderCategoryItem = ({item}) =>(
        <CategoryItem category={item} onSelectCategoryEvent={onSelectCategoryEvent}/>
    )
        
    return(
        <>
            <Header title="Listado Por Categoria" />
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