/*
1. Zona importanciones
*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Saludo} from './components/Saludo' 
import {Saludo2} from './components/Saludo2' 

/*
2. Zona Main (componentes o screens)
*/

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native</Text>
      <Image source={require('./assets/wave.png')}></Image>
      <Saludo></Saludo>
      <Saludo/>
      <Saludo2></Saludo2>
      <StatusBar style="auto" />
    </View>
  );
}

/*
3. Zona estilos
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
