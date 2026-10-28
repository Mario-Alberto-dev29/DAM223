/*
1. Zona importanciones
*/
import { StyleSheet, Text, View,Image } from 'react-native';
import MenuScreen from './screens/MenuScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context';

/*
2. Zona Main (componentes o screens)
*/
export default function App() {
  return (
    <SafeAreaProvider>  
    <MenuScreen></MenuScreen>
    </SafeAreaProvider>

  );
}
/*
3. Zona estilos
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'center',
    alignItems: 'center',
    justifyContent: 'space-evently',
  },
});
