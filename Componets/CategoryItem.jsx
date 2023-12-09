import { Text,StyleSheet } from "react-native";
import Card from "./Card";
import{Colors} from "./Global/Colors";
import { TouchableOpacity } from "react-native";


const CategoryItem = ({category, onSelectCategoryEvent}) =>{

    return(

        <TouchableOpacity onPress={()=>onSelectCategoryEvent(category)}>
            <Card style={styles.CardContainer}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </TouchableOpacity>

        
       
    )


}

const styles = StyleSheet.create({
    CardContainer:{
        backgroundColor:Colors.primary,
        padding:10,
        margin:10
    },
    text: {
        textTransform:"capitalize"

    }
    
})

export default CategoryItem;