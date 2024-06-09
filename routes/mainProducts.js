const express = require("express")
const { getMainProduct } = require("../controllers/mainProdcuts.controller")

const router = express.Router()

router.get("/", getMainProduct)

module.exports = router