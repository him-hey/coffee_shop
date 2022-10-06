import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
  } from "react-native";
  import React, { useState } from "react";
  import SearchField from "../components/SearchField";
  import { Ionicons } from "@expo/vector-icons";
  import ProductList from "../components/ProductList";
import Categoies from "../components/Categories";


  const avatar = require("../assets/avatar.jpg")
  const HomeScreen = () =>{
      return (
         <View style={{padding:20, marginTop:40, backgroundColor:'white'}}>
             <View style={{width:"100%", height:40, justifyContent:'center', marginBottom:20}}>
             <Ionicons name="menu" style={{color:'#c3c4c7', fontSize:27, position:'absolute'}}></Ionicons>
                <Text style={{marginLeft:240, marginTop:12, position:'absolute'}}>Him HEY</Text>
                <View style={{width:'11%', height:'100%'}}>
                    <Image
                        source={avatar}
                        style={{width:'100%', height:'100%', borderRadius:150, marginLeft:310}}
                    ></Image>
                </View>
             </View>
             <SearchField/>
             <Categoies/>
             <ProductList/>
         </View>
      )
  }


  
export default HomeScreen;