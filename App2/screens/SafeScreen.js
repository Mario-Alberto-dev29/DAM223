/*
1. Zona importanciones
*/
import { StyleSheet, Text, View,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SafeAreaEjemplo from '../components/SafeAreaEjemplo';
import ScrollViewEjemplo from '../components/ScrollViewEjemplo';

/*
2. Zona Main (componentes o screens)
*/
export default function SafeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
    <Text>Aqui va la practica 10</Text>
    <SafeAreaEjemplo></SafeAreaEjemplo>
    <ScrollViewEjemplo> </ScrollViewEjemplo>
    </SafeAreaView>
  );
}
/*
3. Zona estilos
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'center',
    alignItems: 'center',
    justifyContent: 'space-evently',
  },
  tituloPrincipal:{
  fontZise:24,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 15
  }
});
