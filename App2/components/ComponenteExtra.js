import {View, Button, Text, StyleSheet} from "react-native";
import { useState } from "react";

export const ComponenteExtra = ({nombre, carrera, materia, cuatri, style})=>{
const[mostrar, setMostrar] = useState(false);
return (
<View style={[estilos.tarjeta, style]}>
<Text style={estilos.nombres}> Nombre: {nombre} </Text>  
{ mostrar && 
<>  
<Text style={estilos.carrera}> Carrera: {carrera} </Text>    
<Text style={estilos.otroTexto}> Materia: {materia} </Text>    
<Text style={estilos.otroTexto}> Número de cuatrimestre: {cuatri} </Text>    
</>
}
<Button title="ver perfil" onPress={ () => setMostrar(!mostrar) }></Button>
</View>
)
}

const estilos = StyleSheet.create({
  nombres:{
  fontSize: 24,
  fontWeight:800,
  textTransform: 'uppercase',
  }, 
  carrera:{
    fontSize: 20,
    fontFamily: 'Roboto',
    color: 'purple',
  },
  otroTexto:{
    fontSize: 18,
    fontFamily: 'Courier',
    color: 'blue',
    fontStyle: 'italic',
  },
  tarjeta:{
  borderWidth: 4,
  borderRadius: 12,
  padding: 15,
  margin: 10,
  }
});