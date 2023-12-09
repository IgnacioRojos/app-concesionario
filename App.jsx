import { ActivityIndicator } from 'react-native';
import Categories from './Componets/Screens/Categories';
import {useFonts} from "expo-font";
import ProductByCategory from "./Componets/Screens/ProductByCategory"
import { useState } from 'react';


export default function App() {
  const [fontLoaded] = useFonts({
    "Roboto-Regular": require("./assets/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/Roboto/Roboto-Bold.ttf")
   
  })
  const [categorySelect,setCategorySelect] = useState("")

  console.log("categoria seleccionada: ",categorySelect)

  if(!fontLoaded) return <ActivityIndicator/>

  const onSelectCategory = (category) =>{
      setCategorySelect(category)
  }

  return (

    <>
      {
        categorySelect
          ?
          <ProductByCategory category={categorySelect}/>
          :
          <Categories onSelectCategoryEvent ={onSelectCategory}/>
      }


      
    </>
    
  );
}


  

