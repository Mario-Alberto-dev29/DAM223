const productos = [];
pedidos = [];
contador = 0;
numeroPedido = 0;
let pedido = "";
function agregarProducto(nombre, precio, cantidad) {

    const producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };

    productos.push(producto);

    console.log("Producto agregado correctamente.");
    contador += 1;
}

function listarProductos() {
    
    console.log("Lista de productos: ");
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        console.log(`Producto ${i + 1}:`);
        console.log(`Nombre: ${producto.nombre}`);  
        console.log(`Precio: $${producto.precio}`);
        console.log(`Cantidad: ${producto.cantidad}`);
    }   

    if (productos.length === 0) {
        console.log("No hay productos registrados.");
        return;
    }
 }

function crearpedido() {
  pedido = "2 unidades de Tomate, 1 unidad de Pollo y 3 unidades de Leche";
  pedidos[numeroPedido] = pedido;
  console.log(`Contenido del pedido: ${pedido}`);
  numeroPedido += 1;
}

agregarProducto("Tomate", 25, 10);
agregarProducto("Papa", 30, 15);
agregarProducto("Pollo", 85, 8);
agregarProducto("Arroz", 20, 12);
agregarProducto("Leche", 8, 30);


  console.log("Opciones:");
  console.log("1. Consultar productos");
  console.log("2. Crear pedido");
  console.log("3. Listar pedidos");

  listarProductos();
  crearpedido();
  console.log("Lista de pedidos:"); 
  for (let i = 0; i < pedidos.length; i++) {
    console.log(`Pedido ${i + 1}: ${pedidos[i]}`);
  }