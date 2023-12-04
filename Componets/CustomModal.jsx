import {Modal,View,Text,Button,StyleSheet} from 'react-native';


const CustomModal = (props) => {
 
      const {modalVisibleprop,setModalVisibleEvent,itemSelctDeletProp,eventoEliminar,animationTypeProp} = props;

    return (
      <Modal animationType={animationTypeProp} visible={modalVisibleprop}>
  
        <View style={styles.modalMensaje}>
  
          <Text>Se eliminará el auto: </Text>
  
          <Text>{itemSelctDeletProp.value}</Text>
  
        </View>
  
        <View style={styles.modalBotones}>
  
          <Button title='Eliminar' color={"#F05D5E"} onPress={eventoEliminar}/>
  
          <Button title='Cancelar' color={"#272932"} onPress={()=> setModalVisibleEvent(false)}/>
          
        </View>
  
      </Modal>
    )
}





const CustomModalOld = (props) =>{

      console.log('modalVisibleProp',props);

      const {modalVisibleProp,setModalVisibleEvent,itemSelctDeletProp,eventoEliminar,animationTypeProp} = props;

    return (
      <Modal animationType={animationTypeProp} visible={modalVisibleProp}>
  
        <View style={styles.modalMensaje}>
  
          <Text>Se eliminará el auto: </Text>
  
          <Text>{itemSelctDeletProp.value}</Text>
  
        </View>
  
        <View style={styles.modalBotones}>
  
          <Button title='Eliminar' color={"#F05D5E"} onPress={eventoEliminar}/>
  
          <Button title='Cancelar' color={"#272932"} onPress={()=> setModalVisibleEvent(!modalVisibleProp)}/>
  
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



  

