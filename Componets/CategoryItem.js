import { Text,StyleSheet } from "react-native";
import Card from "./Card";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "./Feactures/ShopSlice";


const dispatch = useDispatch()


const CategoryItem = ({category, navigation}) =>{

    return(

        <TouchableOpacity onPress={()=>{
            navigation.navigate('Autos Por Categoria',{category})
            dispatch(setCategorySelected(category))
            }            
            }>
            <Card style={styles.CardContainer}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </TouchableOpacity>

        
       
    )


}

const styles = StyleSheet.create({
    CardContainer:{
        backgroundColor:"#607d8b",
        padding:10,
        margin:10
    },
    text: {
        textTransform:"capitalize"

    }
    
})

export default CategoryItem;