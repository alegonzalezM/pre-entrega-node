 
  async function traerProductos(){
    fetch('https://6814cc8c225ff1af162a23f1.mockapi.io/bicycles', {
  headers: { "Content-Type": "application/json" }
})
  .then(async (response) => {
    const data = await response.json();

    console.log(data)
    return data;
})
    .catch((error) => {
    console.error("Error al traer la API:", error);
  })
  }

  async function traerProducto(id){
    try{
       const response= await fetch(`https://6814cc8c225ff1af162a23f1.mockapi.io/bicycles/${id}`, {
  method: "GET",
  headers: { "Content-Type": "application/json" }
       })
    const data = await response.json()
    console.log(data)
    return data;
    } catch(error){ console.error("Error al traer la API:", error)
    }
}

//--------------------------------------------------------
  async function agregarProducto(producto){
   try{
         const response= await fetch(`https://6814cc8c225ff1af162a23f1.mockapi.io/bicycles`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(producto)
          }) 
    const data= await response.json()
    console.log(data)
    return data;
        }
    catch(error){ console.log("No se pudo agregar")}
        }


//--------------------------------------------
  async function eliminarProducto(id){
    try{
  const response= await fetch(`https://6814cc8c225ff1af162a23f1.mockapi.io/bicycles/${id}`, {
  method: "DELETE",
  headers: { "Content-Type": "application/json" },
          }) 
    const data= await response.json()
    console.log(data)
    return data;
        }
    catch(error){ console.log("No se pudo eliminar")}
        }

//--------------------------------------------
  async function actualizarProducto(producto){
    try{
  const response= await fetch(`https://6814cc8c225ff1af162a23f1.mockapi.io/bicycles/${producto.id}`, {
   method: "PUT",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify(producto)
          }) 
    const data= await response.json()
    console.log(data)
    return data;
        }
    catch(error){ console.log("No se pudo actualizar")}
        }
    
// /////////////////////////////////////////

// //     } else if (argum[2] === 'POST') {
// //       const title = argum[3];
// //       const price = argum[4];
// //       const category = argum[5];

// //       console.log('recibimos el dato', argum[3], argum[4], argum[5]);

// //     } else if (argum[2] === 'DELETE') {

// //         const id = argum[3] - 1;
// //         fetch(`https://fakestoreapi.com/products/${id}`, {
// //             method: "DELETE"
// // })
// //         .then(res => res.json())
// //         .then(json => console.log("Producto eliminado:", json))
// //         .then( data.splice(id, 1))
     
// //         //  .catch(err => console.error("Error al eliminar:", err));
// //         console.log("Elemento eliminado. " ,data)

// //     }
// //   }) 
// //   .catch((error) => {
// //     console.error("Error al traer la API:", error);
// //    })
// //   .finally(() => {
// //     console.log("proceso terminado");
// //   });

  const argum = process.argv;
    const id =argum[3];
    console.log("Método ", argum[2], "id: ", argum[3] )
  
    
     switch(argum[2]){
        case "GET":
          traerProductos()
          break;
          
        case "POST":
          agregarProducto({
           "createdAt": "2025-05-22T13:51:47.060Z",
           "name": "Josefina Schmitt JR",
           "avatar": "Track/Fixed-Gear Bicycle",
           "description": "New Sausages model with 87 GB RAM, 998 GB storage, and kooky features",
           "price": "592.95",
           "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/31.jpg",
          });
          break;

        case "PUT":
             actualizarProducto({
            "id":"2",
            "createdAt": "2025-05-22T13:51:47.060Z",
            "name": "Josefina Schmitt ",
            "avatar": "Track/Fixed-Gear Bicycle",
            "description": "New Sausages model with 87 GB RAM, 998 GB storage, and kooky features",
            "price": "592.95",
            "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/31.jpg",
                });
          break;

        case "DELETE":
            eliminarProducto(id);
            break;
        }

        traerPoductos();
// //  traerProducto(21)
// // traerProductos()
 //eliminarProducto(20)