/*
1. Zona importanciones
*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native'; 
import {ComponenteExtra} from '../components/ComponenteExtra' 

/*
2. Zona Main (componentes o screens)
*/

export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
      <ComponenteExtra 
      nombre="Mario Alberto Márquez Carmona" 
      carrera="Ingeniería en tecnologías de la información e innovación digital" 
      materia="Desarrollo de aplicaciones móviles" 
      cuatri="4"
      style={styles.tarjeta1}>        
      </ComponenteExtra>
      <ComponenteExtra 
      nombre="Antonio Mendoza" 
      carrera="Licenciatura en filosofía y letras" 
      materia="Historia universal 1" 
      cuatri="1"
      style={styles.tarjeta2}>        
      </ComponenteExtra>
      <ComponenteExtra 
      nombre="Carmen Martínez" 
      carrera="Licenciatura en matemáticas aplicadas" 
      materia="Calculo vectorial" 
      cuatri="3"
      style={styles.tarjeta3}>        
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evently',
  },
  tarjeta1: {backgroundColor: 'pink'},
  tarjeta2: {backgroundColor: 'orange'},
  tarjeta3: {backgroundColor: 'green'}
});
