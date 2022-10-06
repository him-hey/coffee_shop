import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';


export default function ProductDetail({route, navigation}){
    return(
        <View>
            <Text>{route.params}</Text>
        </View>
    )
}