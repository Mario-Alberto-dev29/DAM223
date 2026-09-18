console.log("Elige la acción que desea ejecutar: ");
eleccion = prompt("1. Saludar\n2. Despedirse\n3. Salir");
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