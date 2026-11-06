import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Icon, Card, MD3Colors} from 'react-native-paper';
import AvatarProfile from '../components/avatar';


export default function App() {
  return (
    <View style={styles.container}>
      <AvatarProfile></AvatarProfile>      
      <Text>Juan Ramírez</Text>
      <Icon
      source="star"
      color={MD3Colors.error50}
      size={20}
      />    
      <Text>4.2</Text>
      <Text>12 Servicios</Text>
      <View>  
            <Card>
      <Card.Content>
      <Text variant="titleLarge">
      Mis habilidades
      </Text>
      <Text variant="bodyMedium">
      Programacion
      </Text>
      <Text variant="bodyMedium">
      Matematicas
      </Text>
     <Text variant="bodyMedium">
      Fisica Cuantica
      </Text>
      <Text variant="bodyMedium">
      Algebra lineal
      </Text>
      </Card.Content>
      </Card>   
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