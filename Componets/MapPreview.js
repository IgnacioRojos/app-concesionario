import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import{api_maps_key} from "./cloud/GoogleCloud"

const MapPreview = ({location}) => {

  const map_PreviewUrl =`https://maps.googleapis.com/maps/api/staticmap?zoom=12&size=300x300&maptype=roadmap&markers=color:red%7Clabel:I%7C${location.latitude},${location.longitude}&key=${api_maps_key}`

  return (
    <View style={styles.MapPreviewContainter}>
        <Image
            style={styles.MapPreview}
            source ={{uri:map_PreviewUrl}}
        />
      
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({
    MapPreviewContainter:{
        justifyContent:"center",
        alignItems:"center"
    },
    MapPreview:{
        width:Dimensions.get("window").width,
        height:300
    }
})