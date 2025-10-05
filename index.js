//    Ejemplo de comandos:

//     npm start GET
//     npm start GET products/20
//     npm start POST products remera 555 indumentaria
//     npm start DELETE products 2
//     npm start PUT products 3  remera 666 indumentaria

//uso de spread operator en traerProducto()
//uso de destructuring en PUT dentro del switch/case

//  --------Métodos---------------------------

async function traerProductos() {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error al traer la API:", error);
  }
}
//----------------------------------------------

async function traerProducto(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/${id}`, {});
    const data = await response.json();
    // console.log(data);
             const productoActualizado = { 
       ...data,        // uso spread para agregar propiedades al objeto
          coleccion:"2025",      
          marca: "Danis"
     }

    console.log(productoActualizado);
  } catch (error) {
    console.error(`Error al traer el producto: ${error} `);
  }
}

//--------------------------------------------------------
async function agregarProducto(producto) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    });
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.error(`No se pudo agregar ${error}`);
  }
}

//--------------------------------------------
async function eliminarProducto(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("Producto eliminado: ", data);
  } catch (error) {
    console.error("No se pudo eliminar", error);
  }
}
//--------------------------------------------
async function actualizarProducto(producto) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${producto.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("No se pudo actualizar");
  }
}

/////////////////////////////////////////

const argum = process.argv;
switch (argum[2]) {
  case "GET":
    if (!argum[3]) {
      traerProductos();
    } else {
      traerProducto(argum[3]);
    }
    break;

  case "POST":
    if (argum.length == 7 && argum[3] == "products") {
      agregarProducto({
        title: argum[4],
        price: argum[5],
        category: argum[6],
      });
    } else {
      console.log(
        "Error en los datos ingresados, debes ingresar TITULO, PRECIO y CATEGORIA"
      );
    }
    break;

  case "PUT":
    const [, , , id, title, price, category] = process.argv; //uso destructuring
    actualizarProducto({ id, title, price, category });
    break;

  case "DELETE":
    if (argum[3] == "products") {
      eliminarProducto(argum[4]);
    } else {
      console.log("Ingresa : products id");
    }
}

// traerProductos()
// traerProducto("products/5")

// agregarProducto({
//    "title": "AAA",
//   "price": 200,
//   "description": "Producto de prueba",
//   "image": "https://example.com",
//   "category": "remera"
// })

//  eliminarProducto(20)
