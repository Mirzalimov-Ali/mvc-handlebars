const Product = require("../models/products.model")
const uuid = require("uuid")

const getAddProduct = (req, res) => {
    res.render("add-products")
}

const addProducts = (req, res) => {
    const uid = uuid.v4()
    const products = new Product(uid, req.body.product_name)
    products.save()
    res.redirect("/products")
}

module.exports = {getAddProduct, addProducts}