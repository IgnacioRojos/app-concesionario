import { Pressable, StyleSheet, Text, View } from 'react-native'
import user_data from "../data/user_data.json"
import { useState } from 'react'
import LocationSelector from '../LocationSelector'
import { useSelector } from 'react-redux'


const Profile = () => {
  
  const [image,setImage] = useState(null)
  const location = useSelector(state => state.authReducer.location)

  return (
    <>
        <View style={styles.containter}>
            <View>
                <Pressable onPress={()=>navigation.navigate("Seleccionar Imagen")} style={({pressed})=> [
                    {
                        backgroundColor: pressed ? "#DCDCDC" : "#E8E8E8"
                    },
                    styles.imageContainer,
                ]}>
                    {
                        image
                        ?
                        null
                        :
                        <Image 
                            source = {{uri:image}}
                            style= {styles.profilePicture}
                            resizeMode = "contain"
                        />
                    }

                </Pressable>
            </View>
            
            <View style={styles.dataContainer}>
                <Text style={styles.userTitle}>{user_data.name}</Text>
                <Text style={styles.userData}>{user_data.role}</Text>
                <Text style={styles.userData}>Nivel:{user_data.level}</Text>
                <Text style={styles.userData}>{user_data.city}</Text>

            </View>

        </View>
        {
            location.address 
            &&
            <View style={styles.addressContainer}>
                <Text style={styles.addressTitle}>ultima ubicacion guardada:</Text>
                <Text style={styles.addressDescription}>{location.address}</Text>

            </View> 
        }
        <LocationSelector/>
    </>
  )
}

export default Profile

const styles = StyleSheet.create({
    containter:{
        flexDirection:"row",
        margin: 20,
        gap: 20,
        alignItems: "flex-start"
    },
    profilePicture:{
        width:100,
        height:100
    },
    dataContainer:{
        marginTop:10,
    },
    userTitle:{
        fontFamily:"Roboto-Bold",
        fontSize:16
    },
    imageContainer:{
        borderRadius:100,
    },
    userData:{
        fontFamily:"Roboto-Regular",
        fontSize:12
    }


})