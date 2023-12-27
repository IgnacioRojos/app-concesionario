import { ActivityIndicator } from 'react-native';
import {useFonts} from "expo-font";
import TabNavigation from "./Componets/Navigation/TabNavigation"
import { Provider } from 'react-redux';
import store from './Componets/Store/Store';

export default function App() {
  const [fontLoaded] = useFonts({
    "Roboto-Regular": require("./assets/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/Roboto/Roboto-Bold.ttf")
   
  })


  if(!fontLoaded) return <ActivityIndicator/>


  return (
    <Provider store={store}>

      <TabNavigation/>

    </Provider>


    
  )

}


  

