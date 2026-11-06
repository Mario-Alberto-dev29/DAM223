import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import AvatarProfile from '../components/avatar';
import { Icon, Card, MD3Colors} from 'react-native-paper';


export default function App() {
  return (
    <View style={styles.container}>
      <AvatarProfile></AvatarProfile>      
      <Text>Hola Max</Text>
      <View>    
      <Card>
      <Card.Content>
      <Text variant="titleLarge">
      Tus creditos
      </Text>
      <Text variant="bodyMedium">
      8.5 horas
      </Text>
      <Text variant="bodyMedium">
      1 hora = 1 credito
      </Text>
      </Card.Content>
      </Card>  
      </View>
     <Icon
      source="camera"
      color={MD3Colors.error50}
      size={20}
      />      
      <Button title='Explorar'></Button>  
      <Icon
      source="laptop"
      color={MD3Colors.error50}
      size={20}
      />    
      <Button title='Publicar'></Button>  
      <Icon
      source="newspaper"
      color={MD3Colors.error50}
      size={20}
      />    
      <Button title='Mis Solicitudes'></Button>  
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