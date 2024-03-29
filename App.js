import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from "expo-font";

import Store from "./Componets/Store/index.js"
import { Provider } from 'react-redux';
import NewTabNavigation from './Componets/Navigation/NewTabNavigation.jsx';
import MainNavigation from './Componets/Navigation/MainNavigation.jsx';
import { init } from './Componets/DB/Index.js';


export default function App() {

  init()
  .then(()=>console.log("Database initializated"))
  .catch((tx,error)=>console.log("Initializated db failed", error.message))


  const [fontLoaded] = useFonts({
    "Roboto-Regular": require("./assets/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/Roboto/Roboto-Bold.ttf")
   
  })

  if(!fontLoaded){
    return null
  }

  return (

    <Provider store={Store}>
      
      <MainNavigation/>

    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
