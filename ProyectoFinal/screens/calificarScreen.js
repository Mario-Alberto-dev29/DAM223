import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { Icon, Card, Searchbar, TextInput, MD3Colors} from 'react-native-paper';
import AvatarProfile from '../components/avatar';
import * as React from 'react';

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [text, setText] = React.useState("");
  const [estrellas, setEstrellas] = React.useState("");
  return (
    <View style={styles.container}>
      <AvatarProfile></AvatarProfile>
      <Text variant="titleLarge">
      Califica a Juan Ramirez
      </Text>     
      <Icon
          source="star"
          color={MD3Colors.error50}
          size={20}
      />    
      <TextInput
          label="number"
          value={estrellas}
          onChangeText={estrellas => setEstrellas(estrellas)}
      />
      <Card>
            <Card.Content>
            <Text variant="bodyMedium">
            Comentarios (opcional)
            </Text>
            <Text variant="bodyMedium">
            <TextInput
            label="text"
            value={text}
            onChangeText={text => setText(text)}
            />
            </Text>

            </Card.Content>
            </Card>   
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