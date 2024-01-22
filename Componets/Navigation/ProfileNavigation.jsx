import { StyleSheet, Text, View } from 'react-native'
import Profile from '../Screens/Profile';
import ImageSelector from "../Screens/ImageSelector";



const stack = createNativeStackNavigator();

const ProfileNavigation = () =>{
    return(
        <stack.Navigator
            initialRouteName="Perfil"
            screenOptions={
                ({navigation, route}) =>({
                    header: () => <Header title={route.name} navigation={navigation}/>
                })
            }
        >
            <stack.Screen 
                name="Perfil"
                component={Profile}
            
            />
            <stack.Screen 
                name="Seleccionar Imagen"
                component={ImageSelector}
            
            />

            




        </stack.Navigator>   
       
    )
}


export default ProfileNavigation

const styles = StyleSheet.create({})