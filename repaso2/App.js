import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, FlatList, ActivityIndicator, ImageBackground, KeyboardAvoidingView, Platform, Switch} from 'react-native';
import {useState, useEffect} from 'react'

const TAREAS_INICIALES = [
  {
    id: "1",
    titulo: "Libro de Mario",
    autor: "Mario",
    genero: "Fantasia"
  },
];

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [blurAmount, setBlurAmount] = useState(0);
  const [libro, setLibro] = useState(TAREAS_INICIALES);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [seleccionado, setSeleccionado] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [cargando,setCargando] = useState(false);
  

  // Imágenes
  // Imagen de fondo profesional / minimalista para la pantalla principal
  const bgMain = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREo4xrCwciCTBF20a8blrQfaBjmMDmiS57Jx7hNvtJ1ZA_70-TQ3E5ZJFB&s=10' };
  const logoApp = { uri: 'https://reactnative.dev/img/tiny_logo.png' };
  const handleEnviar = () => {
  setCargando(true);
  setTimeout(() => setCargando(false), 4000);
  setTimeout(() => agregarLibro(), 4000);

  }
  // -------------------------------------------------------------
  // LÓGICA DE SPLASHSCREEN (3 Segundos)
  // -------------------------------------------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
    agregarLibro();
    setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

    const agregarLibro = () => {
    if (titulo.trim() && autor.trim() && genero.trim()) {
          setLibro((anteriores) => [
      ...anteriores,
      { id: String(Date.now()), titulo: titulo.trim(), autor: autor.trim(), genero: genero.trim()},
    ]);
    alert("Libro guardado correctamente")
    setAutor("");
    setGenero("");
    setTitulo("");
    } else {
    alert("Llena todos los campos");
    }
  };

  // -------------------------------------------------------------
  // VISTA 1: SPLASHSCREEN (Fondo Negro + Cuadro Transparente)
  // -------------------------------------------------------------
  if (showSplash) {
    return (
      <View style={styles.splashBlackBackground}>
        {/* Cuadro semi-transparente sobre fondo negro */}
        <View style={styles.transparentCard}>
          <Image 
            source={logoApp} 
            style={styles.logo} 
          />
        </View>
      </View>
    );
  }

  // -------------------------------------------------------------
  // VISTA 2: PANTALLA PRINCIPAL (ImageBackground)
  // -------------------------------------------------------------
  return (
    <ImageBackground
      source={bgMain}
      style={styles.mainContainer}
      resizeMode="cover"
      blurRadius={blurAmount} // Prop controlada por el State
    >
      <View style={styles.mainCard}>
      
          <View style={styles.pantalla}>
      <TextInput
        style={styles.input}
        placeholder="Agrega el titulos"
        value={titulo}
        onChangeText={setTitulo}
      />
        <TextInput
        style={styles.input}
        placeholder="Agrega el autor"
        value={autor}
        onChangeText={setAutor}
      />
        <TextInput
        style={styles.input}
        placeholder="Agrega el genero"
        value={genero}
        onChangeText={setGenero}
      />

    <View
    >
    {cargando ? (
    <ActivityIndicator
    color = 'blue'
    ></ActivityIndicator>
    ) : (
    <Button
    title = "Agregar Libro"
    onPress ={handleEnviar}
    ></Button>
    )}
    </View>

      <FlatList
        data={libro}
        keyExtractor={(item) => item.id}
        extraData={seleccionado}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => setSeleccionado(item.id)}
            style={[
              styles.item,
              item.id === seleccionado && styles.seleccionado,
            ]}
          >
            <Text>Titulo del libro:</Text>
            <Text>{item.titulo}</Text>
            <Text>Autor del libro:</Text>
            <Text>{item.autor}</Text>
            <Text>Genero del libro:</Text>
            <Text>{item.genero}</Text>

          </Pressable>
        )}
        ListHeaderComponent={
          <Text style={styles.titulo}>Tareas ({libro.length})</Text>
        }
        ListFooterComponent={<Text style={styles.pie}>Fin de la lista</Text>}
        ListEmptyComponent={<Text style={styles.vacio}>No hay tareas.</Text>}
        refreshing={refreshing}
        initialNumToRender={10}
      />
    </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // SplashScreen: Contenedor negro de fondo completo
  splashBlackBackground: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  
  // Cuadro transparente con diseño horizontal estilizado
  transparentCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)', // Fondo blanco muy sutil (transparente)
    borderColor: 'rgba(255, 255, 255, 0.2)',    // Borde fino brillante
    borderWidth: 1,
    paddingVertical: 35,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: '90%',
  },
  
  logo: {
    width: 80,
    height: 80,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  splashTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  splashSubtitle: {
    color: '#CCCCCC',
    fontSize: 14,
  },

  // Pantalla Principal
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 30,
    borderRadius: 18,
    alignItems: 'center',
    width: '80%',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
  }, 
   contenedor: { flex: 1, paddingTop: 50, paddingHorizontal: 16 },
  pantalla: { flex: 1 },
  fila: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 6,
    padding: 8,
    marginTop: 8,
  },
  titulo: { fontSize: 22, fontWeight: "bold", paddingVertical: 12 },
  encabezado: {
    backgroundColor: "#eeeeee",
    padding: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  item: { padding: 14 },
  seleccionado: { backgroundColor: "#d0e8ff" },
  separador: { height: 1, backgroundColor: "#cccccc" },
  pie: { padding: 8, color: "#666666" },
  vacio: { padding: 16, textAlign: "center" },
});


export default App
