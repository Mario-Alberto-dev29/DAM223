/*
1. Zona importanciones
*/
import {StyleSheet, Text, View, Image, TextInput, Alert, Platform, Button} from 'react-native';
import {useState} from 'react';

/*
2. Zona Main (componentes o screens)
*/
const mostrarAlerta = (titulo,mensaje) => {
if (Platform.OS === 'web') {
window.alert(`${titulo} \n\n ${mensaje}`);
} 
else {
Alert.alert(titulo,mensaje);  
}
};
export default function TextInputScreen() {
  const[nombre,setNombre] = useState('');
  const[correo,setCorreo] = useState('');
  const[telefono,setTelefono] = useState('');

const registrar = () => {
const faltantes = []
if (nombre.trim() ===''){
faltantes.push('nombre')  
} 
if (correo.trim() ===''){
faltantes.push('correo')  
} 
if (telefono.trim() ===''){
faltantes.push('telefono')  
} 

if (faltantes.length > 0) {
mostrarAlerta('Faltan datos','Completa' + faltantes.join(','))
return;  
}

if(!correo.includes('@')) {
mostrarAlerta('Correo Invalido.',' El correo debe contener un @')
return;
}

if(telefono.length !== 10) {
mostrarAlerta('Telefono Invalido.',' Debe tener 10 digitos')
return
}

mostrarAlerta(`Datos registrados correctamente \n`, `Nombre: ${nombre} \n Correo: ${correo} \n Telefono: ${telefono} \n`)
setNombre('');
setCorreo('');
setTelefono('');
};

return(
<View style = {styles.contenedor}>
<Text style = {styles.titulo}>Registro de datos</Text>
<TextInput 
style = {styles.input}
placeholder='Nombre'
value = {nombre}
onChangeText={setNombre}
></TextInput>  
<TextInput 
style = {styles.input}
placeholder='Correo'
value = {correo}
onChangeText={setCorreo}
keyboardType='email-address'
autoCapitalize='none'
></TextInput>  <TextInput 
style = {styles.input}
placeholder='Telefono'
value = {telefono}
onChangeText={setTelefono}
keyboardType='numeric'
maxLength={10}
></TextInput>
<Button title='Registrar' onPress={registrar}></Button>  
</View>
)
};
/*
3. Zona estilos
*/
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'violet',
    padding: 20,
    maxWidth: 400,
    width:'100',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
  fontZise: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 20
  },
  input: {
  borderWidth:1,
  borderColor:"#999",
  borderRadius: 8,
  padding:10,
  marginBottom: 12,
  }
})
