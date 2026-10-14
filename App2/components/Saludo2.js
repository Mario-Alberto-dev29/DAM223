import {View,Button, Text, Image} from "react-native";

export const Saludo2 = ()=>{
return (
<View>
<Text> Hola RN: Componente Propio compuesto </Text>    
<Image source={require('../assets/wave.png')}></Image>
<Button title="Presiona para saludar"></Button>
</View>
)
}