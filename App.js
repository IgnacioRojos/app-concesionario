import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from "expo-font";

import Store from "./Componets/Store/index.jsx"
import { Provider } from 'react-redux';
import NewTabNavigation from './Componets/Navigation/NewTabNavigation.jsx';

export default function App() {
  const [fontLoaded] = useFonts({
    "Roboto-Regular": require("./assets/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/Roboto/Roboto-Bold.ttf")
   
  })

  if(!fontLoaded){
    return null
  }

  return (

    <Provider store={Store}>
      
      <NewTabNavigation/>

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
