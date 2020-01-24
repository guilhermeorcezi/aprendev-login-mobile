import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import api from '../services/api';

export default function Login( {navigation} ){
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        const response = await api.post('/login',{
            user,
            password
        })

        const isValid = response.data.logged_in;
        const userExist = response.data.user_exist;

        if(isValid){
            navigation.navigate('Main');
        }else{
            if(userExist){
                Alert.alert('Senha inválida');
            }else{
                Alert.alert('Usuário não existe');
            }
        }
    }

    return (
        <>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text style={styles.cabecalho}>LOGIN</Text>

            <View style={styles.form}>
                <Text style={styles.label}>Usuário</Text>
                <TextInput
                style={styles.input}
                placeholder="Digite o usuário"
                placeholderTextColor="#999"
                value={user}
                onChangeText={setUser}
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                style={styles.input}
                placeholder="Digite a senha"
                placeholderTextColor="#999"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Efetuar Login</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000',
    },

    cabecalho: {
        color:'#E71E28',
        fontWeight:'bold',
        fontSize:40,
    },

    form:{
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop:30,
    },

    label:{
        fontWeight:'bold',
        color:'#fff',
        marginBottom:8  
    },

    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal:20,
        fontSize:16,
        color:'#FFF',
        height: 44,
        marginBottom:20,
        borderRadius:2
    },

    button:{
        height:42,
        backgroundColor:'#E71E28',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
    },

    buttonText: {
        color: '#FFF',
        fontWeight:'bold',
        fontSize:16
    }
});