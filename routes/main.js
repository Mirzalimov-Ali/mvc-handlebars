const { Router } = require('express')
const router = Router()
const path = require('path')

const { users } = require('./users')
const { getMain } = require('../controllers/main.controller')

router.get('/', getMain)

module.exports = router