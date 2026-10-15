/*
1. Zona importanciones
*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Saludo} from './components/Saludo' 
import {Saludo2} from './components/Saludo2' 
import {ComponenteExtra} from './components/ComponenteExtra' 

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
      <ComponenteExtra 
      nombre="Mario Alberto Márquez Carmona" 
      carrera="Ingeniería en tecnologías de la información e innovación digital" 
      materia="Desarrollo de aplicaciones móviles" 
      cuatri="4">        
      </ComponenteExtra>
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
