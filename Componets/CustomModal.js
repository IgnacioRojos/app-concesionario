import {Modal,View,Text,Button,StyleSheet} from 'react-native';


const CustomModal = (props) => {
 
      const {modalVisibleprop,setModalVisibleEvent,itemSelctDeletProp,eventoEliminar,animationTypeProp} = props;

    return (
      <Modal animationType={animationTypeProp} visible={modalVisibleprop}>
  
        <View style={styles.modalMensaje}>
  

          <Text>¿Quiere comprar este auto?: </Text>

          <Text>Se eliminará el auto: </Text>

  
          <Text>{itemSelctDeletProp.value}</Text>
  
        </View>
  
        <View style={styles.modalBotones}>
  
          <Button title='Comprar Auto' color={"#F05D5E"} onPress={eventoEliminar}/>
  
          <Button title='Cancelar' color={"#272932"} onPress={()=> setModalVisibleEvent(false)}/>
          
        </View>
  
      </Modal>
    )
}


const styles = StyleSheet.create({
    modalMensaje:{
        marginTop: 50,
        alignItems:"center"
      },
      modalBotones:{
        flexDirection:"row",
        justifyContent:"space-around"
    
      }


})

export default CustomModal;



  

