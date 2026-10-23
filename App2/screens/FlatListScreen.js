/*
1. Zona importanciones
*/
import { StyleSheet, Text, View,Image } from 'react-native';
/*
2. Zona Main (componentes o screens)
*/
export default function FlatListScreen() {
  return (
    <View style={styles.container}>
    <Text>Aqui va la practica 13</Text>
    <Text>Equipo de Natalia</Text>
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
    flexDirection: 'center',
    alignItems: 'center',
    justifyContent: 'space-evently',
  },
});
