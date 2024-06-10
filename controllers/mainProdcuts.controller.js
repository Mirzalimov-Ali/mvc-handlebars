const Product = require("../models/products.model")
const fs = require("fs")
const path = require("path")
const dataPath = path.join(__dirname, "../data/products.json")

// products page
const getMainProduct = (req, res) => {
    const products = Product.findAll()
    res.render("products", { products })
}

// detail page
const getDetailProduct = (req, res) => {
    const productId = req.params.uid;
    
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).render("500", { title: "Server Error" });
      }
      const products = JSON.parse(data);
      const product = products.find(product => product.uid === productId);
      
      if (!product) {
        return res.status(404).render("404", { title: "User Not Found" });
      }
      
      res.render("productsMoreInfo", {
        title: "Product Details",
        product: product
      });
    });
  }

module.exports = {getMainProduct, getDetailProduct}