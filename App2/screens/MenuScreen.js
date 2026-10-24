/*
1. Zona importanciones
*/
import { StyleSheet, Text, View,Image, Button } from 'react-native';
import { useState } from 'react';
import SafeScreen from './SafeScreen'
import PressableScreen from './PressableScreen'
import TarjetasScreen from './TarjetasScreen'
import TextInputScreen from './TextInputScreen'
import FlatListScreen from './FlatListScreen'
import ImageScreen from './ImageScreen'
import ModalScreen from './ModalScreen'
import ActivityScreen from './ActivityScreen'

/*
2. Zona Main (componentes o screens)
*/
export default function MenuScreen() {
    const[screen,setScreen] = useState('menu');
    switch(screen){
    case 'safe':
    return<SafeScreen/>;
    case 'press':
    return<PressableScreen/>;
    case 'tarjetas':
    return<TarjetasScreen/>;
    case 'text':
    return<TextInputScreen/>;
    case 'flat':
    return<FlatListScreen/>;
    case 'image':
    return<ImageScreen/>;
    case 'modal':
    return<ModalScreen/>;
    case 'activity':
    return<ActivityScreen/>;
    case 'menu':
    default:
    
  return (
    <View style={styles.container}>
    <Text>Menu de practicas</Text>
    <Button title="Practica Tarjetas" onPress={()=>setScreen('tarjetas')}></Button>
    <Button title="Practica SafeAreaView" onPress={()=>setScreen('safe')}></Button>
    <Button title="Practica Pressable" onPress={()=>setScreen('press')}></Button>
    <Button title="Practica TextImput" onPress={()=>setScreen('text')}></Button>
    <Button title="Practica FlatList" onPress={()=>setScreen('flat')}></Button>
    <Button title="Practica Image Background" onPress={()=>setScreen('image')}></Button>
    <Button title="Practica Modal" onPress={()=>setScreen('modal')}></Button>
    <Button title="Practica ActivityIndicator" onPress={()=>setScreen('activity')}></Button>
    </View>
  );
}
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
