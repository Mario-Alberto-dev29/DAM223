import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Max</Text>
      <View>    
      <Text>Tus creditos</Text>
      <Text>8.5 horas</Text>
      <Text>1 Hora = 1 Credito</Text>   
      </View>
      <Button title='Explorar' onPress={iniciarSesion()}></Button>  
      <Button title='Publicar' onPress={iniciarSesion()}></Button>  
      <Button title='Mis Solicitudes' onPress={IniciarSesion()}></Button>  
      <StatusBar style="auto" />
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