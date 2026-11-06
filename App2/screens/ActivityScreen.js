/*
1. Zona importanciones
*/
import { StyleSheet, Text, View, Image, TextInput, Button, ActivityIndicator, KeyboardAvoidingView, Platform, Switch} from 'react-native';
import {useState} from 'react';
/*
2. Zona Main (componentes o screens)
*/
export default function ActivityScreen() {
  const [cargando,setCargando] = useState(false);
  const [esGrande,setEsGrande] = useState(false);
  const [cambiarColor,setCambiarColor] = useState(false);

  const handleEnviar = () => {
  setCargando(true);
  setTimeout(() => setCargando(false), 4000);
  }
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding': 'height'}
    keyboardVerticalOffset={20}
    style ={styles.container}
    >
    <TextInput
    placeholder='Escribe algo...'
    style={styles.input}>
    </TextInput>
    <View
    style={styles.actionContainer}
    >
    {cargando ? (
    <ActivityIndicator
    size={esGrande ? "large" : "small"}
    color = {cambiarColor ? "#00bfff" : "#ff00fb"}
    ></ActivityIndicator>
  ) : (
    <Button
    title = "Enviar"
    onPress ={handleEnviar}
    ></Button>
  )}
    </View>
    <View style={styles.switchBox}>
    <View style={styles.switchRow}>
    <Text style={styles.switchText}>Hacer mas grande</Text>
    <Switch
    value= {esGrande}  
    onValueChange={setEsGrande}>
    </Switch>
    </View> 
    <View style={styles.switchRow}></View>
    <Text style={styles.switchText}>Cambiar color</Text>
    <Switch
    value= {cambiarColor}  
    onValueChange={setCambiarColor}>
    </Switch>
    </View>
    </KeyboardAvoidingView>
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
    justifyContent: 'flex-end',
    padding: 20,
  },
  input: {
  borderWidth: 1,
  borderColor: '$fff',
  padding: 10,
  borderRadius: 8,
  marginBottom: 20,
  backgroundColor: '#fff'
  },
  action: {
  height: 40,
  justifyContent: 'center',
  marginBottom: 20
  },
  switchBox: {
  borderWidth: 1,
  borderColor: '#fff',
  borderRadius: 8,
  padding: 15,
  backgroundColor: '#fff'
  },
  switchRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 15
  },
  switchText: {
  fontSize: 16
  }
});
