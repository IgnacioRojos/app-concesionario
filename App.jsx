import { ActivityIndicator } from 'react-native';
import {useFonts} from "expo-font";
import NewTabNavigation from "./Componets/Navigation/NewTabNavigation"
import { Provider } from 'react-redux';
import Store from "./Componets/Store/index"

export default function App() {
  const [fontLoaded] = useFonts({
    "Roboto-Regular": require("./assets/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/Roboto/Roboto-Bold.ttf")
   
  })


  if(!fontLoaded) return <ActivityIndicator/>


  return (
    <Provider store={Store}>

      <NewTabNavigation/>

    </Provider>


    
  )

}


  

