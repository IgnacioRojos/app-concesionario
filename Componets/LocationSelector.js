import { View,StyleSheet,Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import {useEffect, useState} from 'react'
import * as Location from "expo-location"
import MapPreview from './MapPreview'
import{api_maps_key} from "./cloud/GoogleCloud"
import { useDispatch, useSelector } from 'react-redux'
import { setUserLocation } from './Feactures/AuthSlice'
import { usePostUserLocation } from './services/ShopServices'

function LocationSelector() {

  const [location,setLocation] = useState("")
  const [error, setError] = useState("")
  const[address,setAddress] = useState("")
  const localId = useSelector(state => state.authReducer.localId)
  const [triggerPostUserLocation,result] = usePostUserLocation()
  
  useEffect(()=>{
    (async ()=>{
        let {status} = await Location.requestForegroundPermissionsAsync()
        if(status!=="granted"){
            setError("No se han otorgado los permisos para obtener la ubicacion")
            return
        }

        let location = await Location.getCurrentPositionAsync()
        setLocation({latitude: location.coords.latitude})

    })()
  },[])

  useEffect(()=>{
    (async()=>{
      try{
        if(location.latitude){
          const urlReverseGeoCode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude},&key=${api_maps_key}`
          const respose = await fetch(urlReverseGeoCode)
          const data = await respose.json()
          const formattedAdress = await data.result[0].formatted_adress
          setAddress(formattedAdress)
        }
      }catch (error){
          setError(error.message)
      }
    })()
  },[location])


  const dispach = useDispatch()

  const onConfirm = () =>{
    const locationFormatted = {
      latitude: location.latitude,
      longitude: location.longitude,
      address: address
    }
    dispach(setUserLocation(locationFormatted))
    triggerPostUserLocation({location: locationFormatted, localId})

  }

  return (
    <View style={styles.containter}>
      <Text style={styles.textTitle}>Mi ubicacion actual:</Text>
        {
          location.latitude
          ?
          <>
          <Text style={styles.textAdress}>{address}</Text>
          <Text style={styles.locationText}>
            (Lat: {location.latitude}, Long: {location.longitude})
          </Text>
          <TouchableOpacity style={styles.btn} onPress={onConfirm}>
              <Text style={styles.btnText}>Actualizar ubicacion</Text>
          </TouchableOpacity>
          <MapPreview location={location}/>
          </>
          :
          <ActivityIndicator/>
        }
    </View>
  )
}

export default LocationSelector


const styles = StyleSheet.create({
  containter:{
    marginTop:20,
    alignItems:"center",
    justifyContent:"center",
    paddingBottom:130,
    gap:5
  }
})