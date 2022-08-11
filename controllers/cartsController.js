const carritos = require("../utils/carritos");

class Carts { 
  
  static createCart() {
    const newCartId = carritos.create()
    return newCartId
  }

  static addProduct(x, y) {
    const data = carritos.addProduct(x, y);
    return data
  }
  
  static getById (x) {    
    const data = carritos.getById(x);
    return data;
  }  
  
  static deleteById (x) {
    const data = carritos.deleteById(x);
    return data;
  } 

  static deletProduct (x, y) {
    const data = carritos.deletProduct(x, y);
    return data;
  }     

} 

module.exports = Carts;