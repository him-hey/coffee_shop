import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import coffees from "../config/coffees";


const Categoies = () =>{
    return (
        <View style={{ marginTop:10, marginLeft:-20}}>
           <Text style={{fontSize:20, fontWeight:'bold', marginLeft:20}}>Categories</Text>
           <FlatList
            horizontal={true}
            data={coffees}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{marginVertical: 10}}
            renderItem={({ item })=>(
                <View style={{marginLeft:20, alignItems:'center'}}>
                    <View style={{width:50, height:50}}>
                        <Image
                            source={item.image}
                            style={{width:50, height:50, borderRadius:100}}
                        ></Image>
                    </View>
                    <Text>{item.name}</Text>
                </View>
            )}
           ></FlatList>
        </View>
    )
}

export default Categoies;