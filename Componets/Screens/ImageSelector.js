import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import {Colors} from "../Global/Colors"
import * as ImagePicker from "expo-image-picker"
import { useDispatch, useSelector } from 'react-redux';
import { setProfileUser } from '../Feactures/AuthSlice';
import { usepostProfilePicture } from '../services/ShopServices';

const ImageSelector = ({navigation}) => {
  
  const image = useSelector(state =>state.authReducer.profileUser)

  const localId = useSelector(state => state.authReducer.localId)

  const pickImage = async () =>{
    const isCameraOk = await verifyCameraPermission()
    if(isCameraOk) {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[1,1],
            base64: true,
            quality: 0.2
        })
        if(!result.canceled){
            setImage(`data:image/jpeg:base64,${result.assets[0].base64}`)
        }
    }else{
        console.log("no se otorgaron los permisos para usar la camara")
    }

  }

  const dispatch = useDispatch()

  const [triggerSaveProfilePicture, result] = usepostProfilePicture

  const confirmImage = () =>{
    dispatch(setProfileUser(image))
    triggerSaveProfilePicture({image, localId})
    navigation.goBack()
    
  }
  const verifyCameraPermission = async () =>{
    const {granted} = await ImagePicker.requestCameraPermissionsAsync()
    granted ? true : false
  }

  return (
    <View style={styles.container}>
        {
            image
                ?
                <View style={styles.imageContainter}>
                    <Image
                        source = {{uri:image}}
                        style = {styles.image}
                        resizeMode="cover"
                    />

                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn} onPress={pickImage}>
                            <Text style={styles.btnText}>Tomar Otra</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.btn,...styles.btnConfirm}} onPress={confirmImage}>
                            <Text style={styles.btnText}>Confirmar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                :
                <View style={styles.noImageContainer}>

                    <FontAwesome name="user-times" size={200} color="#CCC" />
                    <TouchableOpacity style={styles.btn} onPress={pickImage}>
                        <Text style={styles.btnText}>Abrir Camara</Text>
                    </TouchableOpacity>
            
                </View>
        }
      
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
    noImageContainer:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:100,
    },
    btn:{
        backgroundColor:Colors.primary,
        padding:10,
        borderRadius:5,
        marginTop:50,
    },
    btnText:{
        color: "#fff"
    },
    imageContainter:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:100,
    },
    image:{
        width:250,
        height:250,
        borderRadius:250,
    },
    btnContainer:{
        flexDirection:"row",
        gap:10,
    },
    btnConfirm:{
        backgroundColor:Colors.secundary,
        paddingHorizontal:50
    }
})