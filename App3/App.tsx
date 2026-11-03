import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {StyleSheet, Text, View, Image, TextInput, Alert, Platform, Button, Switch} from 'react-native';

export default function App() {
const[nombre,setNombre] = useState('');
const[carrera,setCarrera] = useState('');
const[semestre,setSemestre] = useState('');
const[asistiraTaller,setAsistiraTaller] = useState(false);
const[requiereConstancia,setRequiereConstancia] = useState(false);
const[participaraDeportes,setParticiparaDeportes] = useState(false);
const validar = () => {
console.log("La función validar se ejecutó");

const faltantes = []

if (nombre.trim() ===''){
faltantes.push('nombre')  
}

if (carrera.trim() ===''){
faltantes.push('carrera')  
}

if (semestre.trim() ===''){
faltantes.push('semestre')  
}

if (faltantes.length > 0){
Alert.alert('Campos incompletos', 'Favor de llenar todos los campos: ' + faltantes.join(', '))
} else {
if (isNaN(semestre) || semestre < 1 || semestre > 10){
Alert.alert('Error', 'El semestre debe estar entre 1 y 10')
} else {
Alert.alert('Registro enviado', 
'Nombre: ' + nombre + '\n' +
'Carrera: ' + carrera + '\n' +
'Semestre: ' + semestre + '\n' +
'Asistirá al taller: ' + (asistiraTaller ? 'Sí' : 'No') + '\n' +
'Requiere constancia: ' + (requiereConstancia ? 'Sí' : 'No') + '\n' +
'Participará en deportes: ' + (participaraDeportes ? 'Sí' : 'No')
)
}
}};

return (
    <View style={styles.container}>
      <Text>Registro a evento universitario</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 10}}
        value = {nombre}
        onChangeText={setNombre}
        placeholder="Nombre"
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 10}}
        value = {carrera}
        onChangeText={setCarrera}
        placeholder="Carrera"
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 10}}
        value = {semestre}
        onChangeText={setSemestre}
        placeholder="Semestre"
      />
      <Text>¿Asistira al taller?</Text>
      <Switch
        value={asistiraTaller}
        onValueChange={(value) => setAsistiraTaller(value)}
      />
      <Text>¿Requiere constancia?</Text>
      <Switch
        value={requiereConstancia}
        onValueChange={(value) => setRequiereConstancia(value)}
      />
      <Text>¿Participara en deportes?</Text>
      <Switch
        value={participaraDeportes}
        onValueChange={(value) => setParticiparaDeportes(value)}
      />
      <Button
        title="Registrar"
        onPress={validar}
      />
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
