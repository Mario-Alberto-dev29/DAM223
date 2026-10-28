import {use, useState} from 'react';
import {StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SafeAreaEjemplo(){
const [mensaje,setMensaje]=useState('Bienvenidos a nuestra practica')
return (
    <SafeAreaView style={StyleSheet.container} enges={['top', 'botton']}>
    <Text style = {styles.titulo}>Ejemplo de SafeAreaView</Text>
    <Text style = {styles.mensaje}>{mensaje}</Text>
    <Button
    title="cambiar mensaje"
    onPress={() => setMensaje(mensaje === 'Esta es nuestra practica'
        ? 'hola': 'Esta es nuestra practica'
    )}></Button>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
container:{
backgroundColor: 'violet',
padding: 20,
alightItems: 'center',
borderRadious: 10,
},
titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,

},
mensaje: {
    fontSize: 16,
    marginBottom: 10,
}   
})