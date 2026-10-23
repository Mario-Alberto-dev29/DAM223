/*
1. Zona importanciones
*/
import { StyleSheet, Text, View,Image } from 'react-native';
/*
2. Zona Main (componentes o screens)
*/
export default function TextInputScreen() {
  return (
    <View style={styles.container}>
    <Text>Aqui va la practica 12</Text>
    <Text>Equipo de Jesus</Text>
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
