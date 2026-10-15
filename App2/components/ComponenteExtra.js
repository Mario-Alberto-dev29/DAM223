import {View, Button, Text} from "react-native";
import { useState } from "react";

export const ComponenteExtra = ({nombre, carrera, materia, cuatri})=>{
const[mostrar, setMostrar] = useState(false);
return (
<View>
<Text> Nombre: {nombre} </Text>  
{ mostrar && 
<>  
<Text> Carrera: {carrera} </Text>    
<Text> Materia: {materia} </Text>    
<Text> Número de cuatrimestre: {cuatri} </Text>    
</>
}
<Button title="ver perfil" onPress={ () => setMostrar(!mostrar) }></Button>
</View>
)
}