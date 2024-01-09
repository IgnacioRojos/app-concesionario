import {StyleSheet,FlatList, View} from "react-native"
import CategoryItem from "../CategoryItem"

  
    

    const Categories = ({navigation})=>{

        const categoryy = useSelector(state =>state.ShopReducer.category)

        const renderCategoryItem = ({item}) =>(
            <CategoryItem category={item} navigation={navigation}/>
        )

    
            
        return(
            <>
            
                <FlatList
                    data ={categoryy}
                    renderItem={renderCategoryItem}
                    keyExtractor={item=>item}
                
                />
            </>
            
            
        )
    }

    export default Categories;

    const styles = StyleSheet.create({
        
    })