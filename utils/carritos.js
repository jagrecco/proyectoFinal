const fs = require("fs")

const productos = require("./productos");

const carts = [];
let id = 0;


const create = () => {
  id ++ 
  let timestamp = new Date().getTime();
  carts.push({id : id, timestamp: timestamp , products : []})
  persiste(carts)
  return id
} 

const deleteById = (i) => {    
  let index = carts.findIndex(x => x.id == i) 
  if (index == -1) {
    return ({ error: 'Carrito no encontrado' })
  }  
  carts.splice(index, 1);
  persiste(carts)
  return "Carrito Eliminado"  
}

const getById = (x) => {    
  if (carts.length === 0) {return ({"Error" : "No hay Carritos"})} 
  return (carts.find(el => el.id == x) || { error: 'Carrito no encontrado' })  
}  

const addProduct = (idCarrito, idProducto) => {    
  if (carts.length === 0) {return ({"Error" : "No hay Carritos"})} 

  let indexCart = carts.findIndex(el => el.id == idCarrito)
  if (indexCart == -1) {
    return ({ error: 'Carrito no encontrado' })
  } 

  const products = productos.list()
  let indexProduct = products.findIndex(el => el.id == idProducto)
  if (indexProduct == -1) {
    return ({ error: 'Producto no encontrado' })
  } 

  carts[indexCart].products.push(products[indexProduct])

  persiste(carts)

  return "Producto Agregado"
   
}  


const deletProduct = (idCarrito, idProducto) => {    
  if (carts.length === 0) {return ({"Error" : "No hay Carritos"})} 

  let indexCart = carts.findIndex(el => el.id == idCarrito)
  if (indexCart == -1) {
    return ({ error: 'Carrito no encontrado' })
  } 

  const productos = carts[indexCart].products;
  let indexProduct = productos.findIndex(el => el.id == idProducto)
  if (indexProduct == -1) {
    return ({ error: 'Producto no encontrado' })
  } 

  carts[indexCart].products.splice(indexProduct, 1);

  persiste(carts)

  return "Producto Eliminado"
   
}  


const persiste = async()=>{

  try {
    console.log(carts)
    await fs.promises.writeFile("./utils/carritos.json", JSON.stringify(carts, null, 2))
    
  }
  catch(error){
    console.log(`Problemas al acceder al archivo ` + error)
  }
}

module.exports = { create,  getById, deleteById, addProduct, deletProduct };