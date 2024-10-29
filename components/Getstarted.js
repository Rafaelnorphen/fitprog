import react from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native'
import Loginbtn from "./Loginbtn";
import { NavigationContainer, useNavigation } from "@react-navigation/native";


const Getstarted = () => {
    const navigation = useNavigation();
    return (
        <View style={{flex: 1}}>
            <View>
                <Image
                source={require('../assets/image.png')}
                style={{
                    height: 730,
                    width: 400,
                    resizeMode:  'contain',
                }}
                >
                </Image>

            <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
            <Text style={styles.text}>GET STARTED</Text>
            </TouchableOpacity>
            
            </View>

        </View>

        
    )
}


const styles = StyleSheet.create({

button:{
    borderRadius: 5,
    marginHorizontal: 0,
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#b8c6db',

},
text:{
    justifyContent: 'center',
    left: 150
}
   
    
})

export default Getstarted