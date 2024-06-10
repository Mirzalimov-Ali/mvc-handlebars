const express = require("express")
const { getMainProduct, getDetailProduct } = require("../controllers/mainProdcuts.controller")

const router = express.Router()

// products page
router.get("/", getMainProduct)

// detail page
router.get("/detail/:uid", getDetailProduct)

module.exports = router