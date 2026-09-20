const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log("Opciones:");
console.log("1. Consultar productos");
console.log("2. Crear pedido");
console.log("3. Listar pedidos");
rl.question("Ingrese una opción: ", (eleccion) => {
  switch (eleccion) {
  case "1":
    console.log("Consultar produtos");
    break;
  case "2":
    console.log("Crear pedido productos");
    break;
  case "3":
    console.log("Listar pedidos");
    break;
  default:
    console.log("Opción no válida.");
}
  rl.close();
});
 