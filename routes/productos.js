const express = require("express");
const { Router } = require("express");

const productos = Router()

productos.get("/", (req, res) => {
    res.send("Productos OK")
    
});

productos.post("/", (req, res) => {
    res.send("Post productos");
});

module.exports=productos
  