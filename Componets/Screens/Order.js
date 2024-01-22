import { FlatList,StyleSheet } from "react-native";
import orders_data from "../data/orders_data.json";
import OrderItem from "../OrderItem";



const Order = () =>{
    const renderOrderItem = ({item}) =>{
        const total= item.items.reduce((acumulador, currentItem)=>(
            acumulador+=currentItem.price*currentItem.quantity
        ),0)
        return(
            <OrderItem order={item} total={total}/>
        )
    }

    return(
        <FlatList 
            data={orders_data}
            renderItem={renderOrderItem}
            keyExtractor={item=>item.id}
        
        
        />
    )

}

export default Order;