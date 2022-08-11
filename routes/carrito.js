const express = require("express");
const { Router } = require("express");

const carts = Router();

const Carts = require("../controllers/cartsController")

carts.post("/", (req, res) => {     
  const data = Carts.createCart()  
  res.status(201).json(data)   
});

carts.delete("/:id", (req, res) => {   
  let id = req.params.id  
  const data = Carts.deleteById(id)  
  res.json(data) 
});

carts.get("/:id/productos", (req, res) => {  
  let id = req.params.id    
  let data = Carts.getById(id)   
  res.status(201).json(data.products)
});

carts.post("/:id/productos/:idProducto", (req, res) => { 
  let idCarrito = req.params.id   
  let idProducto = req.params.idProducto  
  
  const data = Carts.addProduct(idCarrito, idProducto)
  res.status(201).json(data)   
});

carts.delete("/:id/productos/:idProducto", (req, res) => { 
  let idCarrito = req.params.id   
  let idProducto = req.params.idProducto   
  
  const data = Carts.deletProduct(idCarrito, idProducto)
  res.json(data)   
});

module.exports = carts;
