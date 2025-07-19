**Zapatería Interactiva**

Introducción

Este proyecto es una aplicación de consola que simula una zapatería interactiva. El usuario puede interactuar con la aplicación para mostrar productos por categoría, agregar productos al inventario y salir del programa.

Cómo Funciona

1. *Menú Principal*: La aplicación muestra un menú principal con tres opciones:
- Mostrar productos por categoría
- Agregar productos al inventario
- Salir
2. *Mostrar Productos por Categoría*: El usuario puede seleccionar la opción 1 para mostrar productos por categoría. La aplicación pedirá al usuario que ingrese la categoría deseada y luego mostrará los productos que coinciden con esa categoría.
3. *Agregar Productos al Inventario*: El usuario puede seleccionar la opción 2 para agregar productos al inventario. La aplicación pedirá al usuario que ingrese el ID del producto, la marca del zapato y el precio. Si el producto ya existe en el inventario, la aplicación mostrará un mensaje de error.
4. *Salir*: El usuario puede seleccionar la opción 3 para salir del programa.

Código

El código está escrito en JavaScript y utiliza un objeto `productos` para almacenar los productos en el inventario. A continuación, se muestra el código:
const productos = {
  1: { id: 1, nombre: "Nike", precio: 250000 },
  2: { id: 2, nombre: "Puma", precio: 300000 },
  3: { id: 3, nombre: "New Balance", precio: 450000 }
};


Funciones

La aplicación utiliza varias funciones para realizar las operaciones:

- `mostrarProductosPorCategoria()`: Muestra los productos que coinciden con la categoría ingresada por el usuario.
- `agregarProducto()`: Agrega un producto al inventario si no existe ya.
- `mostrarMenu()`: Muestra el menú principal y maneja las opciones del usuario.

Cómo Ejecutar el Código

1. Clona el repositorio o descarga el código.
2. Abre el archivo `gestion_datos.js` en un editor de código.
3. Ejecuta el archivo `index.js` en la terminal o consola.
4. Interactúa con la aplicación seleccionando las opciones del menú.

Requisitos

- Node.js instalado en tu sistema.
- Un editor de código o IDE.

Conclusión

Este proyecto es un ejemplo de cómo crear una aplicación de consola interactiva en JavaScript. Se puede ejecutar desde la consola del navegador y esta en fase desarrollo para implementarle mas funciones y hacerlo interactivo en la web.