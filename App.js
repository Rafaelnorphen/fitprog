import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './components/Onboarding'
import Getstarted from './components/Getstarted';
import Loginbtn from './components/Loginbtn';
import Paginator from './components/Paginator';
import AppNavigator from './components/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
    <AppNavigator/>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: '',
    justifyContent: 'center',
  },
})