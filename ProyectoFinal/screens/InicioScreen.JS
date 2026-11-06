import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
      <Card.Content>
      <Text variant="titleLarge">
      Vaictam
      </Text>
      <Text variant="bodyMedium">
      Banco de tiempo y talentp
      </Text>
      </Card.Content>
      </Card>  
      <Button title='Iniciar Sesion' onPress={iniciarSesion()}></Button>  
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