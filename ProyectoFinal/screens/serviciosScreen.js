import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';
import { Icon, Card, Searchbar, TextInput} from 'react-native-paper';
import AvatarProfile from '../components/avatar';
import * as React from 'react';

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [text, setText] = React.useState("");
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text variant="bodyMedium">
      Servicios
      </Text>
      <Card>
            <Card.Content style={styles.container}>
            <Text variant="bodyMedium">
              Programación
            </Text>
            <Image size={24} source={require('../assets/progra.png')} />

            <Text variant="bodyMedium">
              Matemáticas
            </Text>
            <Image size={24} source={require('../assets/mate.png')} />

            <Text variant="bodyMedium">
              Mecatrónica
            </Text>
            <Image size={24} source={require('../assets/meca.png')} />

            <Text variant="bodyMedium">
            Cocina
            </Text>
            <Image size={24} source={require('../assets/cocina.png')} />

            <Text variant="bodyMedium">
              Física Cuántica
            </Text>
            <Image size={24} source={require('../assets/fisica.png')} />

            <Text variant="bodyMedium">
              Algebra lineal
            </Text>
            <Image size={24} source={require('../assets/algebra.png')} />

            </Card.Content>
            </Card>
      </View>
      </ScrollView>   
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});