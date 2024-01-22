import {StyleSheet,FlatList, View} from "react-native"
import { usegetcategoriesquery } from "../services/ShopServices";

    

    const Categories = ({navigation})=>{

        const {data, isloading, error} = usegetcategoriesquery()

    
            
        return(
            <>
                <View>
                    <Text>{data}</Text>
                </View>
            </>
            
        )
    }

    export default Categories;

    const styles = StyleSheet.create({
        
    })