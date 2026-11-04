import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Juan Ramírez</Text>
      <Text>4.2 Estrellas</Text>
      <Text>12 Servicios</Text>

      <View>    
      <Text>Mis habilidades</Text>
      <Text>Programación</Text>
      <Text>Matemáticas</Text>   
      <Text>Física Cuántica</Text>
      <Text>Algebra Lineal</Text>   
      </View>
      <View>    
      <Text>Información</Text>
      <Text>Correo Electrónico: Juan@gmail.com</Text>
      <Text>Miembro desde 01/08/25</Text>   
      </View>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});