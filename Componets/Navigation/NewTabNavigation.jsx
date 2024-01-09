import {View, Text, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import {Colors} from "../Global/Colors";
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 



import OrderNavigation from "./OrderNavigation";
//import ShopNavigation from "./ShopNavigation";
import NewShopNavigation from "./NewShopNavigation";
import CartNavigation from "./CartNavigation";





const Tab = createBottomTabNavigator()


export default function NewTabNavigation () {

    return (
        <NavigationContainer>

             <Tab.Navigator
                screenOptions={{
                    headerShown:false,
                    tabBarShowLabel:false,
                    tabBarStyle: styles.tabNavigator

                

                }}   
             >
                
                <Tab.Screen 
                    name="ShopStack" 
                    component={NewShopNavigation}
                    options={{
                        tabBarIcon:({focused})=>(
                            <Entypo name="shop" size={32} color={focused?"white":"#ccc"} />
                        )

                    }}
                
                />

                <Tab.Screen 
                    name="CartStack" 
                    component={CartNavigation}
                    options={{
                        tabBarIcon:({focused})=>(
                            <AntDesign name="shoppingcart" size={24} color={focused?"white":"#ccc"} />
                        )

                    }}

                />

                 <Tab.Screen 
                    name="OrdersStack" 
                    component={OrderNavigation}
                    options={{
                        tabBarIcon:({focused})=>(
                            <FontAwesome name="reorder" size={24} color={focused?"white":"#ccc"} />
                        )

                    }}

                />

            </Tab.Navigator>

        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    tabNavigator:{
        backgroundColor: Colors.tab
    }


})