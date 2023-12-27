import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import {Colors} from "../Global/Colors";
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

import OrderNavigation from "./OrderNavigation";
import ShopNavigation from "./ShopNavigation";
import CartNavigation from "./CartNavigation";

const Tab = createBottomTabNavigator()

const TabNavigation = () =>{
    return(
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
                    component={ShopNavigation}
                    options={{
                        tabBarIcon:({focused})=>(
                            <Entypo name="shop" size={24} color={focused?"white":"#ccc"} />
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

export default TabNavigation;


const styles = StyleSheet.create({
    tabNavigator:{
        backgroundColor: Colors.tab
    }


})