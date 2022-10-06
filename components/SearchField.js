import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";


const SearchField = () =>{
    return (
        <View style={{padding:10, backgroundColor:'#eeeeee', borderRadius:10, overflow:'hidden', justifyContent:'center'}}>
            <TextInput placeholder="Find your drink here..." style={{paddingLeft:20}}></TextInput>
            <Ionicons name="search" style={{position:'absolute', marginLeft:310, fontSize:20, color:'#c3c4c7'}}></Ionicons>
        </View>
    )
}

export default SearchField;