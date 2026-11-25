import {Stack} from "expo-router"

export default function RootLayout() {
    return (
    <Stack>
    <Stack.Screen
    name="(tabs)"
    options={{headerShown:false}}>
    </Stack.Screen>
    <Stack.Screen
    name="detalle"
    options={{title:"Detalle de usuario"}}>
    </Stack.Screen>
    <Stack.Screen
    name="actualiza"
    options={{title:"Cambios de usuario"}}>
    </Stack.Screen>
    </Stack>

    )
}