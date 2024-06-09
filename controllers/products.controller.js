const Product = require("../models/products.model")
const uuid = require("uuid")

const getAddProduct = (req, res) => {
    res.render("add-products")
}

const addProduct = (req, res) => {
    const uid = uuid.v4() 
    const product = new Product(uid, req.body.product_name)
    product.save()
    res.redirect("/products")
}

module.exports = {getAddProduct, addProduct}