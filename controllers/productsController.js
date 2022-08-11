const fs=require("fs")

const productos = require("../utils/productos");

class Products { 
  
  static getAll() {
    const allProducts = productos.list()
    return allProducts
  }

  static save(object) {
    const idProduct = productos.save(object);
    productos.persiste(object)
    
    return idProduct
  }
  
  static getById (x) {    
    const data = productos.getById(x);
    return data;
  }  
  
  static deleteById (x) {
    const data = productos.deleteById(x);
    return data;
  } 

  static changeById (x, object) {
    const data = productos.changeById(x, object);
    return data;
  }

  

} 

module.exports = Products;