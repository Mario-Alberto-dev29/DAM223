/*
1. Zona importanciones
*/
import { StyleSheet, Text, View, Switch, Pressable } from 'react-native';
import {useState} from 'react';
/*
2. Zona Main (componentes o screens)
*/
export default function PressableScreen() {
  const [encendido,setEncendido] = useState(false)
  const [contador,setContador] = useState(0);
  return (
    <View style={styles.container}>
    <Text style = {styles.container}>Practica Switch y Pressable</Text>
    <Switch
    value = {encendido}
    onValueChange={(valor) => setEncendido(valor)}
    >
    </Switch>
    <Text style={styles.texto}>El switch esta: {encendido ? 'Encendido': 'Apagado'}</Text>

    <Pressable style = {styles.boton} onPress={() => setContador(contador + 1)}>
    <Text style={styles.textoBoton}>Presioname</Text>
    <Text style={styles.texto}>Veces presionado: {contador}</Text>
    </Pressable>
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
    justifyContent: 'center',
  },
  titulo: {
  fontSize: 24,
  fontWeight: 'told',
  marginBottom: 40,  
  },
  texto: {
  marginVertical: 15
  },
  boton: {
  backgroundColor: 'yellow',
  padding: 15,
  marginTop: 30
  },
  textoBoton: {
  color: 'white',
  fontSize: 18,
  fontWeight: 'told'  
  }
});
