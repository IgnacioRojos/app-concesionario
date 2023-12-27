import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Header";
import Order from "../Screens/Order";


const stack = createNativeStackNavigator();

const OrderNavigation = () =>{
    return(
        <stack.Navigator
            initialRouteName="Órdenes"
            screenOptions={
                ({navigation, route}) =>({
                    header: () => <Header title={route.name} navigation={navigation}/>
                })
            }
        >
            <stack.Screen 
                name="Órdenes"
                component={Order}
            
            />

            




        </stack.Navigator>   
       
    )
}

export default OrderNavigation;