const express = require("express")
const { getAddProduct, addProducts } = require("../controllers/products.controller")

const router = express.Router()

router.get("/add-products", getAddProduct)

router.post("/products", addProducts)

module.exports = router