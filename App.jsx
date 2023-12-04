import { useState } from 'react';
import { FlatList} from 'react-native';
import { StyleSheet, Text, View,TextInput, Button} from 'react-native';
import CustomModal from './Componets/CustomModal'


export default function App() {
  const [textItem,setTextItem] = useState("");
  const [itemList,setItemList] = useState([]);
  const [itemSelctDelet, setItemSelectDelet] = useState({})
  const [modalVisible, setModalVisible] = useState(false)


  const onChangeTextHandler = (text) =>{
    setTextItem(text)
  }

  const addItemList = () =>{
    setItemList (prevState => [...prevState,{id: Math.random().toString(),value:textItem}])
    console.log(itemList)
    setTextItem("")
  }

  const seleccionarItem = (id) =>{
    setModalVisible(!modalVisible)
    setItemSelectDelet(itemList.find((item)=>item.id === id))
  }

  const eliminarItem = () =>{
    setItemList(itemList.filter((item)=>item.id !== itemSelctDelet.id))
    setModalVisible(!modalVisible)
  }

  

  const renderListItem = ({item}) =>{
    return(
      <View style={styles.renderListItem}>
        <Text margin={10} >{item.value}</Text>
        <Button title='X' color="#E57A44" onPress={()=>seleccionarItem(item.id)}/>
      </View>
    )
  }


  return (
    <>
    <View style={styles.container}>

      <View style={styles.textInput}>
        <TextInput style={styles.text} 
        placeholder='ingrese un Auto'
        onChangeText={onChangeTextHandler}
        value={textItem}
        />
        <Button title='agregar'
        onPress={addItemList}/>
      </View>

      <FlatList
        data={itemList}
        renderItem={renderListItem}
        keyExtractor={item=>item.id}
      />

      <CustomModal

        animationTypeProp="slide"
        modalVisibleprop={modalVisible}
        itemSelctDeletProp={itemSelctDelet}
        eventoEliminar ={eliminarItem}
        setModalVisibleEvent={setModalVisible}
        
      />

    </View>
    {/*<Modal animationType='slide' visible={modalVisible}>

      <View style={styles.modalMensaje}>

        <Text>Se eliminará el auto: </Text>

        <Text>{itemSelctDelet.value}</Text>

      </View>

      <View style={styles.modalBotones}>

        <Button title='Eliminar' color={"#F05D5E"} onPress={()=> eliminarItem()}/>

        <Button title='Cancelar' color={"#272932"} onPress={()=> setModalVisible(!modalVisible)}/>

      </View>

    </Modal>*/}
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:30,
  },
  textInput:{
    flexDirection:"row",
    justifyContent:"space-evenly",

  },
  text:{
    borderBottomColor: "black",
    width:200,
    borderBottomWidth:1,
  },
  renderListItem:{
    flexDirection:"row",
    justifyContent: "space-between",
    margin:10,
    backgroundColor:"#E3D985",
    borderRadius: 20,
    
  }
 
  
});

