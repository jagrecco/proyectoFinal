const express = require("express");
const { Router } = require("express");

const carro = Router()

carro.get("/", (req, res) => {
    res.send("Carrito OK");
});
  
  
carro.post("/", (req, res) => {
    res.send("Post carrito");
});

module.exports = carro