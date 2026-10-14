const productos = [];
contador = 0;
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
    
    console.log("\n LISTA DE PRODUCTOS ");
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

agregarProducto("Tomate", 25, 10);
agregarProducto("Papa", 30, 15);
agregarProducto("Pollo", 85, 8);
listarProductos();