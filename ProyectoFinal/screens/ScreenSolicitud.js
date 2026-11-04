import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>    
      <Text>Estado</Text>
      <Text>Fecha</Text>
      <Text>Hora</Text>
      <Text>Mensaje</Text>   
      </View>
      <Text>Aceptar solicitud?</Text>   
      <Button title='Aceptar' onPress={iniciarSesion()}></Button>  
      <Button title='Rechazar' onPress={iniciarSesion()}></Button>  
      <Button title='Cancelar' onPress={IniciarSesion()}></Button>  
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