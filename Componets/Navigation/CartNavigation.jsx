import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../Header';

import Cart from "../Screens/Cart"


const Stack = createNativeStackNavigator()


const CartNavigation = () =>{
    return(
        <Stack.Navigator
        initialRouteName='Carrito'
        screenOptions= {
            ({navigation, route})=>({
                header: () => <Header title={route.name} navigation= {navigation}/>
            })
        
        
        }                 


        >
        <Stack.Screen
            name='Carrito'
            component={Cart}


        />
        

           
    </Stack.Navigator>






    )


}


export default CartNavigation;