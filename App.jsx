import { ActivityIndicator } from 'react-native';
//import Categories from './Componets/Screens/Categories';
import {useFonts} from "expo-font";
//import ProductByCategory from "./Componets/Screens/ProductByCategory"
import { useState } from 'react';
//import ProductDetail from './Componets/Screens/ProductDetail';

import Navigation from './Componets/Navigation/Navigation';


export default function App() {
  const [fontLoaded] = useFonts({
    "Roboto-Regular": require("./assets/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/Roboto/Roboto-Bold.ttf")
   
  })
  const [categorySelect,setCategorySelect] = useState("")
  const [productIdSelect, setProductIdSelect] = useState(null)

  console.log("categoria seleccionada: ",categorySelect)

  if(!fontLoaded) return <ActivityIndicator/>

  const onSelectCategory = (category) =>{
      setCategorySelect(category)
  }

  const onSelectProductId = (productId) =>{
       setProductIdSelect(productId)   
  }

  return (

    <Navigation/>
    
  )

}


    {/*<>
      {
        productIdSelect?
          <ProductDetail productId={productIdSelect}/>
          :
        categorySelect
          ?
          <ProductByCategory category={categorySelect} onSelectProductIdEvent={onSelectProductId}/>
          :
          <Categories onSelectCategoryEvent ={onSelectCategory}/>
      }


      
    </>*/}
  

