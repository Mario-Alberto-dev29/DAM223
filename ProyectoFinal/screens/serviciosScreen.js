import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Avatar } from 'react-native-paper';

export default function serviciosScreen() {
  return (
    <ScrollView style={styles.screen}>
      {/* 1. LA CARD PRINCIPAL QUE ENCAPSULA TODO */}
      <Card style={styles.mainCard}>
        <Card.Content>
          
          {/* SECCIÓN 1: SERVICIOS DESTACADOS */}
          <Text variant="titleMedium" style={styles.sectionTitle}>Servicios destacados</Text>
          
          {/* Fila Horizontal de Servicios */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalRow}>
            {/* Tarjeta de Matemáticas */}
            <View style={styles.itemContainer}>
              <Avatar.Image size={60} source={require('../assets/mate.png')} />
              <Text variant="bodyMedium" style={styles.itemTitle}>Matemáticas</Text>
              <Text variant="bodySmall" style={styles.itemSub}>2 Solicitudes</Text>
            </View>

            {/* Tarjeta de Programación */}
            <View style={styles.itemContainer}>
              <Avatar.Image size={60} source={require('../assets/progra.png')} />
              <Text variant="bodyMedium" style={styles.itemTitle}>Programación</Text>
              <Text variant="bodySmall" style={styles.itemSub}>3 Solicitudes</Text>
            </View>

            {/* Tarjeta de Mecánica */}
            <View style={styles.itemContainer}>
              <Avatar.Image size={60} source={require('../assets/meca.png')} />
              <Text variant="bodyMedium" style={styles.itemTitle}>Mecánica CLS</Text>
              <Text variant="bodySmall" style={styles.itemSub}>4 Solicitudes</Text>
            </View>
          </ScrollView>

          {/* SECCIÓN 2: SERVICIOS DISPONIBLES */}
          <Text variant="titleMedium" style={styles.sectionTitle}>Servicios disponibles</Text>
          
          {/* Fila Horizontal de Disponibles */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalRow}>
            {/* Cocina */}
            <View style={styles.itemContainer}>
              <Avatar.Image size={60} source={require('../assets/cocina.png')} />
              <Text variant="bodyMedium" style={styles.itemTitle}>Cocina</Text>
              <Text variant="bodySmall" style={styles.itemSub}>3 Solicitudes</Text>
            </View>

            {/* Física */}
            <View style={styles.itemContainer}>
              <Avatar.Image size={60} source={require('../assets/fisica.png')} />
              <Text variant="bodyMedium" style={styles.itemTitle}>Física Cuántica</Text>
              <Text variant="bodySmall" style={styles.itemSub}>2 Solicitudes</Text>
            </View>

            {/* Álgebra */}
            <View style={styles.itemContainer}>
              <Avatar.Image size={60} source={require('../assets/algebra.png')} />
              <Text variant="bodyMedium" style={styles.itemTitle}>Álgebra Lin.</Text>
              <Text variant="bodySmall" style={styles.itemSub}>1 Solicitud</Text>
            </View>
          </ScrollView>

        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  mainCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    paddingVertical: 10,
    elevation: 2, // Sombra para Android
  },
  sectionTitle: {
    color: '#0277bd', // Color azul del título en tu Figma
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  horizontalRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  itemContainer: {
    alignItems: 'center',
    width: 100,
    marginRight: 15,
  },
  itemTitle: {
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 5,
  },
  itemSub: {
    color: 'gray',
    fontSize: 11,
    textAlign: 'center',
  },
});