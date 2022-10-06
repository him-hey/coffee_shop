import { StyleSheet, Text, View, SafeAreaView, ScrollView,Dimensions, Image, Button } from "react-native";
import React from "react";
import coffees from "../config/coffees";
const { width } = Dimensions.get("window");


const handlePress = (id) =>{console.log(id)};
const ProductList = ({navigation}) =>{
    return (
       <SafeAreaView>
           <ScrollView style={{marginBottom:200}}>
            <View style={{marginTop:20}}>
                <Text style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>Coffees List</Text>
                {coffees.map((coffee) =>(
                    <View key={coffee.id} style={{marginBottom:20}}>
                        <View>
                            <Image source={coffee.image} style={{width:'100%', height:200, borderRadius:10}}/>
                           
                        </View>
                        <View>
                            <Text style={{fontSize:16,}}>{coffee.name}</Text>
                            <Text>{coffee.price} $</Text>
                            <Text style={{fontSize:8, marginBottom:20}}>{coffee.description}</Text>    
                            <Button
                                style={{fontSize: 20, color:'brown'}}
                                onPress={() => navigation.navigate('ProductDetail', coffee)}
                                title="Detail">
                            </Button>
                        </View>          
                    </View>
                ))}
            </View>
           </ScrollView>
       </SafeAreaView>
    )
}

export default ProductList;
const styles = StyleSheet.create({});