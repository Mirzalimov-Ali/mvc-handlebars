const express = require("express")
const { getAddProduct, addProduct } = require("../controllers/products.controller")

const router = express.Router()

router.get("/add-products", getAddProduct)

router.post("/products", addProduct)

module.exports = router