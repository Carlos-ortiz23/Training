// Colección de productos.
const productos = {
    1: { id: 1, nombre: "Nike", precio: 250000 },
    2: { id: 2, nombre: "Puma", precio: 300000 },
    3: { id: 3, nombre: "New Balance", precio: 450000 }
};


function mostrarMenu() {
    /*const prompt = require("prompt-sync")();*///Con este patron lo podemos ejecutar en node. 
    let opcion;
    do {
        console.log(
        "\n¡Bienvenido a mi zapateria!\n1. Mostrar productos por categoría\n2. Agregar productos a inventario\n3. Salir"
        );
        opcion = prompt("Elija una opción: ");

        switch (opcion) {
        case "1":
            console.log("")
            let categoriaSolicitada = prompt("Buscar por categoria: ");

            //Se agrega categoria al producto
            const productosMap = new Map([
                ["Nike", "Running"],
                ["Puma", "Casual"],
                ["New Balance", "Running"]
            ]);

            //Buscar productos por categoria
            let productosEncontrados = false;
            productosMap.forEach((categoria, producto) => {
                if (categoria.toLowerCase() === categoriaSolicitada.toLowerCase()) {
                    console.log(`\nCategoría: ${categoria}, Producto: ${producto}`);
                    productosEncontrados = true;
                }
            }); 

            if (!productosEncontrados){
            // Mostrar mensaje si la categoría no se encuentra
            console.log(`\nLa categoría '${categoriaSolicitada}' no se encontró.`);
            }

        break;
        case "2":
            console.log("Has elegido la opción 2");
            // Obtener nombre a ingresar

            let id = parseInt(prompt("ID del producto: "));
            let nombre = prompt("Marca del Zapato: ");
            let precio = parseInt(prompt("Precio: "));
            // Verificar si el nombre ya existe
            const nombresExistentes = new Set(Object.values(productos).map(producto => producto.nombre.toLowerCase()));

            //Se valida el producto
            if (nombresExistentes.has(nombre.toLowerCase())) {
                console.log(`\n❌ Error: El producto con la marca "${nombre}" ya está registrado.`);
                console.log("\n📦 Inventario sin duplicados:");
                for (const producto of nombresExistentes) {
                    console.log("Producto únicos: ",producto);
                }

            } else {
                productos[id] = { id: id, nombre: nombre, precio: precio };
                console.log("\n✅ Producto agregado correctamente.");
                console.log("\n📦 Inventario actualizado:");
                for (const id in productos) {
                    console.log(`Producto ID: ${id}, Detalles:`, productos[id]);
                }
            }
        break;
        case "3":
            console.log("Saliendo...");
            break;
        default:
            console.log("\nOpción no valida. Intente de nuevo.");
        }
    } while (opcion !== "3");
}

mostrarMenu();





