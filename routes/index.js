const express = require("express");
const router = express.Router();

const products = require("./productos")
const cart = require("./carrito")
const err = require("./error")

router.use("/api/productos", products)
router.use("/api/carrito", cart)
router.use("*", err)

module.exports = router