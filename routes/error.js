const express=require("express")
const { Router } = express

const error=Router()

error.get("*", (req, res) => {
    res.send("Ruta inexistente");
});

error.post("*", (req, res) => {
    res.send("Ruta inexistente");
});

module.exports = error;
  