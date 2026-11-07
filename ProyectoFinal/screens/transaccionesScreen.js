import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { Icon, Card, Searchbar, MD3Colors} from 'react-native-paper';
import AvatarProfile from '../components/avatar';
import * as React from 'react';

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [text, setText] = React.useState("");
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
      Transacciones
      </Text>
      <Text variant="bodyMedium">
      Registros de intercambios realizados
      </Text>
      </Card.Content>
      </Card>   
      </View>
      <View>  
        <Searchbar
      placeholder="Buscar usuario, servicio o fecha"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
      <Text variant="bodyMedium">
      Nombre completo
      </Text>
       <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />
      <Text variant="titleLarge">
      Servicios recomendados
      </Text>
      <Card>
      <Card.Content>
      <AvatarProfile></AvatarProfile>
      <Text variant="titleLarge">
      Juan Abdul
      </Text>
      <Text variant="bodyMedium">
      Juan@abdul.com
      </Text>
      <Icon
            source="account"
            color={MD3Colors.error50}
            size={20}
    />    
     <Text variant="bodyMedium">
      10/09/26
      </Text>
      <button>Cancelado</button>
      </Card.Content>
      </Card>   
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