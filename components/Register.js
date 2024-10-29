import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialIcons } from 'react-native-vector-icons';
import { useState } from 'react';
import { useFonts, Roboto_400Regular, Roboto_900Black_Italic, Oswald_300Light } from '@expo-google-fonts/roboto'

export default Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, nomecompleto] = useState("");
    const [cpassword, confirmPassword] = useState("");

    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_900Black_Italic,

        
      });

      if (!fontsLoaded) {
        return null;
      }
   
    return(
    <View style ={styles.createacc}>

                <Image
                source={require('../assets/register.png')}
                style={{
                    height: 200,
                    width: 400,
                    resizeMode:  'center',
                }}
                >
                </Image>

        <Text style={styles.header}>Register Account</Text>

        <View style={styles.inputContainer}>
                    <MaterialIcons name='person' size={20} color='#666' style={{ marginRight: 5 }} />
                    <TextInput
                        placeholder='Full Name'
                        style={{ flex: 1, paddingVertical: 0 }}
                        value={nome}
                        onChangeText={nomecompleto}
                    />
        </View>
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
        </View>

        <View style={styles.inputContainer}>
                    <MaterialIcons name='lock-outline' size={20} color='#666' style={{ marginRight: 5 }} />
                    <TextInput
                        placeholder='Confirm Password'
                        style={{ flex: 1, paddingVertical: 0 }}
                        secureTextEntry={true}
                        value={cpassword}
                        onChangeText={confirmPassword}
                    />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

    </View>

    
    )
}

const styles = StyleSheet.create({

    createacc: {           
        justifyContent: 'space-between', 
        paddingTop: 100,
        backgroundColor: "#FFF"
        

    },

    inputContainer: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 50,
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
    header: {
        fontSize: 30,
        marginBottom: 20,
        justifyContent: "center",
        fontFamily: "Roboto_900Black_Italic",
        marginLeft: 80,

    },
})
