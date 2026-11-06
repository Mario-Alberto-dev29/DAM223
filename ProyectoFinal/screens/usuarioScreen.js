import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import AvatarProfile from '../components/avatar';
import { Icon, Card, MD3Colors } from 'react-native-paper';


export default function App() {
  return (
    <View style={styles.container}>
      <View>    
      <Card>
      <Card.Content>
      <AvatarProfile></AvatarProfile>
      <Text variant="titleLarge">
      Ramiro Ramirez
      </Text>
      <Button title='Activo'></Button>
      <Text variant="bodyMedium">
      Nombre completo: Ramiro Ramirez Hernandez
      </Text>
      <Text variant="bodyMedium">
      Correo electronico: ramiro@ramirez.com
      </Text>
      <Text variant="bodyMedium">
      Rol: Usuario activo
      </Text>
    <Text variant="bodyMedium">
      Creditos actuales: 8.5
      </Text>
      </Card.Content>
      </Card>  
      </View>
     <StatusBar style="auto" />
      <Button title='Guardar cambios'></Button>  
      <Button title='Eliminar usuario'></Button>  

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