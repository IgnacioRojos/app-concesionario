import { useState } from 'react';
import { FlatList} from 'react-native';
import { StyleSheet, Text, View,TextInput, Button} from 'react-native';
import CustomModal from './Componets/CustomModal'
import CustomInput from './Componets/CustomInput';


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
        <Button title='Comprar' color="#E57A44" onPress={()=>seleccionarItem(item.id)}/>
      </View>
    )
  }


  return (
    <>
    <View style={styles.container}>

      <CustomInput
        placeholderProp= "Ingrese un Auto"
        textItemProp= {textItem}
        onChangeTextHandlerEvent={onChangeTextHandler}
        addItemListEvent = {addItemList}
      
      />

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

