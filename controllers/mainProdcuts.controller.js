const Product = require("../models/products.model")

const getMainProduct = (req, res) => {
    const products = Product.findAll()
    res.render("products", { products })
}

module.exports = {getMainProduct}