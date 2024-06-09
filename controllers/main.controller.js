const User = require("../models/users.model")

const path = require("path");
const fs = require("fs");
const dataPath = path.join(__dirname, "../data/users.json");

// users page
const getMain = (req, res) => {
    const users = User.findAll()
    res.render('main', {
      title: 'User list',
      users
    })
}

// detail page
const getAbout = (req, res) => {
  const userId = req.params.uid;
  
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).render("500", { title: "Server Error" });
    }
    const users = JSON.parse(data);
    const user = users.find(user => user.uid === userId);
    
    if (!user) {
      return res.status(404).render("404", { title: "User Not Found" });
    }
    
    res.render("usersMoreInfo", {
      title: "User Details",
      user: user
    });
  });
}

module.exports = {getMain, getAbout}