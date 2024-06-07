const express = require("express")
const { getMainProducts } = require("../controllers/mainProducts.controller")

const router = express.Router()

router.get("/", getMainProducts)

module.exports = router