const { Router } = require('express')
const router = Router()
const path = require('path')

const { users } = require('./users')
const { getMain, getAbout } = require('../controllers/main.controller')

// users page
router.get('/', getMain)

// detail page
router.get("/users/detail/:uid", getAbout)

module.exports = router