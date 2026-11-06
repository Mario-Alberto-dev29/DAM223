import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// IMPORTACIÓN DE PANTALLAS
import InicialScreen from './screens/InicialScreen';
import PerfilScreen from './screens/PerfilScreen';
import ServiciosScreen from './screens/serviciosScreen';
import TransaccionesScreen from './screens/transaccionesScreen';
import UsuarioScreen from './screens/usuarioScreen';
import CalificarScreen from './screens/calificarScreen';

export default function App() {
  const [pantalla, setPantalla] = useState('menu');

  const volverMenu = () => {
    setPantalla('menu');
  };

  const botones = [
    { nombre: 'Inicial', componente: InicialScreen },
    { nombre: 'Perfil', componente: PerfilScreen },
    { nombre: 'Servicios', componente: ServiciosScreen },
    { nombre: 'Transacciones', componente: TransaccionesScreen },
    { nombre: 'Usuario', componente: UsuarioScreen },
    { nombre: 'Calificar', componente: CalificarScreen },
  ];

  const seleccionada = botones.find(
    item => item.nombre === pantalla
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {pantalla === 'menu' ? (
        <ScrollView contentContainerStyle={styles.menu}>

          <Text style={styles.titulo}>DAM223</Text>
          <Text style={styles.subtitulo}>
            Panel de navegación provisional
          </Text>

          {botones.map((item) => (
            <TouchableOpacity
              key={item.nombre}
              style={styles.boton}
              onPress={() => setPantalla(item.nombre)}
            >
              <Text style={styles.textoBoton}>
                {item.nombre}
              </Text>
            </TouchableOpacity>
          ))}

        </ScrollView>
      ) : (
        <View style={styles.contenido}>

          <TouchableOpacity
            style={styles.regresar}
            onPress={volverMenu}
          >
            <Text style={styles.textoRegresar}>
              ← Regresar al menú
            </Text>
          </TouchableOpacity>

          {seleccionada &&
            React.createElement(seleccionada.componente)
          }

        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F9',
  },

  menu: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#263B80',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 15,
    color: '#777',
    marginBottom: 30,
  },

  boton: {
    width: '100%',
    backgroundColor: '#263B80',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  contenido: {
    flex: 1,
  },

  regresar: {
    backgroundColor: '#263B80',
    padding: 14,
  },

  textoRegresar: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});