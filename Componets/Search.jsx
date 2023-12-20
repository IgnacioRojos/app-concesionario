import { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { StyleSheet,Text,View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 

const Search = ({onSearchEvent}) =>{
    
    const[searchInput, setSearchInput] = useState("")
    const[error,setError] = useState("")


    const onSearchHandler = () =>{
        const regEx = /[^\w\s]/
        if(regEx.test(searchInput)){
            setError("solo se admiten numero y letras")
            setSearchInput("")

        }else{
            setError("")
            onSearchEvent(searchInput)
        }
    }

    const resetSearch = ()=>{
        setSearchInput("")
        onSearchEvent(searchInput)

    }
 
    
    return(
            <>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.textInput} onChangeText={setSearchInput} placeholder="Buscar Auto" value={searchInput}/>
                    <TouchableOpacity onPress={()=>onSearchHandler(searchInput)}>
                        <Octicons name="search" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={resetSearch}>
                        <MaterialCommunityIcons name="delete-forever" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                {
                    error
                    ?
                    <View><Text>{error}</Text></View>
                    :
                    null
                }
            
            
            </>
            
    )
}

export default Search;



const styles= StyleSheet.create({
    searchContainer:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    textInput:{
        width:"80%"
    }



})