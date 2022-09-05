import ProductosDao from "./daos/firebaseProductosDao.js"
/* const ProductosDao = require ("./daos/mongoProductosDao.js") */
/* import prodSchema from "./models/productoSchema.js"
/* const prodSchema =  require ("./models/productoSchema.js") */

const productos = new ProductosDao()

/* let mensaje */

/* const listado = await productos.listarTodos()
console.log(listado)
 */


/* const listado = await productos.listarUno("kpFyf4XSSyx7uPNmxAtw")
console.log(listado) */
/* console.log(listado.length + " productos!!")

/* const listado = await productos.borrarUno("631507f28173400694f408c7")
console.log(listado.acknowledged)
console.log("_ID: 631507f28173400694f408c7 borrado") */

/* const uno=productos.listarUno("6302a829167e8da69df1df96").then(mensaje, ()=>{
    console.log(uno)
}) */

const ob={
    nombre: "Cartuchera simple",
    descripcion: "Cartuchera plástica de 20cm",
    codigo: "000B000",
    foto: "https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU",
    precio: 150,
    stock: 100
    
}

const insertarUno = await productos.guardarUno(ob)
console.log("Insertó?")
console.log(insertarUno)

/* const borrarUno = await productos.borrarUno("631527c5a2a4249badf68e82")
console.log("Producto eliminado: " + borrarUno.acknowledged) */

/* const ob={
    descripcion: 'Cartuchera plástica de 20cm simple cara',
}
const idProducto={
    _id:"631524281026a605feeaee09",
}

const editaUno = await productos.editaUno(idProducto, ob)
console.log("Modificó!")
console.log(editaUno) */

/* await productos.terminaConexion(); */