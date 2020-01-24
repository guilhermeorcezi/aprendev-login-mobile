import React from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

export default function Main({navigation}){

    
    return (
        <View style={styles.box}>
            <Text style={styles.text}>Welcome</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box:{
        flex:1,
        backgroundColor:'#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    text:{
        color:'#E71E28',
        fontSize:32
    }
});

