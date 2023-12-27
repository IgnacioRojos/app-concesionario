import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../Header';
import Categories from "../Screens/Categories";
import ProductByCategory from "../Screens/ProductByCategory";
import ProductDetail from "../Screens/ProductDetail";

const Stack = createNativeStackNavigator()

const Navigation = () =>{


    return(
      

        <Stack.Navigator
            initialRouteName='Categoria Autos'
            screenOptions= {
                ({navigation, route})=>({
                    header: () => <Header title={route.name} navigation= {navigation}/>
                })
            
            
            }                 


            >
            <Stack.Screen
                name='Categoria Autos'
                component={Categories}
                options={{title:"Categoria De Autos",
                headerStyle:{backgroundColor:"#ef5350"}
            }}
            />
            <Stack.Screen
                name='Autos Por Categoria'
                component={ProductByCategory}
                options={{title:"Autos De La Marca",
                headerStyle:{backgroundColor:"#ef5350"}
            }}
            />
            <Stack.Screen
                name='Detalle Auto'
                component={ProductDetail}
                options={{title:"Detalle Del Auto",
                headerStyle:{backgroundColor:"#ef5350"}
            }}
            />

               
        </Stack.Navigator>
          
    
    )


}



export default Navigation;


