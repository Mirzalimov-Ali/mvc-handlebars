const User = require("../models/users.model")

const getMain = (req, res) => {
    const users = User.findAll()
    res.render('main', {
      title: 'User list',
      users
    })
}

module.exports = {getMain}