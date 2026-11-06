import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { Icon, Card, Searchbar, TextInput} from 'react-native-paper';
import AvatarProfile from '../components/avatar';
import * as React from 'react';

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <AvatarProfile></AvatarProfile>
      <Image size={24} source={require('../assets/estrellas.jpg')} />
      <Text variant="titleLarge">
      Califica a Juan Ramirez
      </Text>     
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