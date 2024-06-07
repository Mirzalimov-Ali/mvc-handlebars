const User = require("../models/users.model")
const uuid = require("uuid")

const getAddNewUser = (req, res) => {
    res.render('add-users', {
        title: 'Add new user'
    })
}

const addNewUser = (req, res) => {
    const uid = uuid.v4()
    const users = new User(uid, req.body.username, req.body.age)
    users.save()
    res.redirect("/")
}


module.exports = {getAddNewUser, addNewUser}