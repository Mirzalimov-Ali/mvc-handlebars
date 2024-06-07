const Product = require("../models/products.model")

const getMainProducts = (req, res) => {
    const products = Product.findAll()
    res.render("products", {products})
}

module.exports = {getMainProducts}