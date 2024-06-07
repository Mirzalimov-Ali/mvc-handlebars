const express = require('express')
const router = express.Router()
const path = require('path')
const { getAddNewUser, addNewUser } = require('../controllers/users.controller')

router.get('/add-users', getAddNewUser)


router.post('/users', addNewUser)

exports.router = router
// exports.users = users