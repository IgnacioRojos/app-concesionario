import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../Header';
import SignUp from '../Screens/SignUp';


const Stack = createNativeStackNavigator()


const AuthNavigation = () =>{
    return(
        <Stack.Navigator
        initialRouteName='SignUp'
        screenOptions= {
            ({navigation, route})=>({
                header: () => <Header title={route.name} navigation= {navigation}/>
            })
        }                 
        >

        <Stack.Screen
            name='SignUp'
            component={SignUp}
        />

        <Stack.Screen
            name='Login'
            component={Login}
        />
        

           
    </Stack.Navigator>






    )


}


export default AuthNavigation;