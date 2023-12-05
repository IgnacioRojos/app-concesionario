import { View,TextInput,Button,StyleSheet,Modal } from "react-native";

const CustomInput = (props)=>{
    const {placeholderProp,textItemProp,onChangeTextHandlerEvent,addItemListEvent} = props;

    return(
        <View style={styles.textInput}>
            <TextInput style={styles.text} 
                placeholder={placeholderProp}
                onChangeText={onChangeTextHandlerEvent}
                value={textItemProp}
            />
            <Button title='agregar'
                onPress={addItemListEvent}/>
        </View>

    )
    

}

const styles = StyleSheet.create({
    textInput:{
        flexDirection:"row",
        justifyContent:"space-evenly",
    
    },
    text:{
        borderBottomColor: "black",
        width:200,
        borderBottomWidth:1,
    }




})



export default CustomInput;