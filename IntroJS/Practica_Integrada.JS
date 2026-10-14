let eleccion = 1;
productos = [];
pedidos = [];
contador = 0;
numeroPedido = 0;
let pedido = "";
function agregarProducto(nombre, precio, cantidad, estatus) {

    const producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        estatus: estatus
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
  pedido = prompt("Ingrese el contenido del pedido: ");
  pedidos[numeroPedido] = pedido;
  console.log(`Contenido del pedido: ${pedido}`);
  numeroPedido += 1;
}

function aplicarpromo() {
    for (let i = 1; i < productos.length; i+2) {
        const producto = productos[i];
        producto.precio = producto.precio*0.50; 
    }  
}

agregarProducto("capuchino", 25, 10, "cafe");
agregarProducto("moka", 30, 15, "cafe");
agregarProducto("caramell", 85, 8, "cafe");
agregarProducto("descafeinado", 20, 12, "cafe");
agregarProducto("chocolate", 8, 30, "no cafe");

while (eleccion !== "9") {
console.log("Opciones:");
console.log("1. Consultar productos");
console.log("2. Crear pedido");
console.log("3. Listar pedidos");
console.log("4. Añadir producto")
console.log("5. Filtrar contenido")
console.log("9 Salir del programa")
eleccion = prompt("Elige una opcion o 9 para salir del programa: ");
switch (eleccion) {
    case "1":
        listarProductos();
        break;
    case "2":
        crearpedido();
        break;
    case "3":
    crearPedido();
    crearPedido();
        console.log("Lista de pedidos:");
          for (let i = 0; i < pedidos.length; i++) {
        console.log(`Pedido ${i + 1}: ${pedidos[i]}`);
      }
        break;
    case "4":
    let producto = prompt ("Escribe el nombre del producto: ");
    let precio = prompt ("Fija el nombre del producto ");
    let cantidad = ("Escribe la cantidad de producto que tienes ");
    agregarProducto(producto, precio, cantidad);
        break;
    case "5":
        let promos = [];
        promos = productos.map (function (x) {return x * 0.50;});
        aplicarpromo();         
        console.log("Hay nuevas promociones disponibles");
        console.log("Opciones disponibles: ");
        console.log("1. Todos los productos");
        console.log("2. Mostrar solo productos calisificados como cafe");
        console.log("3. Mostrar solo productos que no sea cafe");
        console.log("4. Promociones");
        let personalizacion = prompt ("Elige la opcion segun lo que quieres ver");
        switch (personalizacion) {
        case "1":
        listarProductos();
        break;
        case "2":
         for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        if (producto.estatus = "cafe") {
        console.log(`Producto ${i + 1}:`);
        console.log(`Nombre: ${producto.nombre}`);  
        console.log(`Precio: $${producto.precio}`);
        console.log(`Cantidad: ${producto.cantidad}`);
        }
        }            
        break;
        case "3":
        for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        if (producto.estatus !== "cafe") {
        console.log(`Producto ${i + 1}:`);
        console.log(`Nombre: ${producto.nombre}`);  
        console.log(`Precio: $${producto.precio}`);
        console.log(`Cantidad: ${producto.cantidad}`);
        }
        }      
        break;
        case 4:
        for (let i = 1; i < productos.length; i+2) {
        const producto = productos[i];
        console.log(`Nombre: ${producto.nombre}`);  
        console.log(`Precio: $${producto.precio}`);
        console.log(`Cantidad: ${producto.cantidad}`);
        }
        break;  
        default:
        console.log("Opción no válida");
        break;
        }
        break;
        default:
        console.log("Opción no válida");
        break;
}
}


