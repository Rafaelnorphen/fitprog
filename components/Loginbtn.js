import { useState } from 'react';
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import Onboarding from './Onboarding';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Register from './Register';

export default Loginbtn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation(Register);

    return (
        <View style={styles.container}>
            
            <Onboarding />
           
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <MaterialIcons name='alternate-email' size={20} color='#666' style={{ marginRight: 5 }} />
                    <TextInput
                        placeholder='Email ID'
                        style={{ flex: 1, paddingVertical: 0 }}
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons name='lock' size={20} color='#666' style={{ marginRight: 5 }} />
                    <TextInput
                        placeholder='Password'
                        style={{ flex: 1, paddingVertical: 0 }}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity>
                        <Text style={{ color: '#000000', fontWeight: '100' }}>Forgot?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.orText}>Or login with...</Text>

                <View style={styles.socialLoginContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image style={styles.images} source={require('../assets/Google.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={require('../assets/twitter.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={require('../assets/Instagram.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.registerContainer}>
                    <Text>New to the app?</Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
                        <Text style={{ color: '#FF1654', marginLeft: 5 }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    
    },
    formContainer: {
        flexGrow: 1,             
        justifyContent: 'flex-end', 
        paddingBottom: 20,    
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF1654',
        paddingVertical: 12,
        borderRadius: 5,
        marginBottom: 20,
        width: '100%',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        color: '#666',
        marginBottom: 20,
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    socialButton: {
        borderColor: '#ddd',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 5,
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
