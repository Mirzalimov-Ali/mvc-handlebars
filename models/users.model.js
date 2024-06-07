const fs = require("fs")
const path = require("path")

const pathFile = path.join(__dirname, "../data/users.json")

module.exports = class User {
    constructor(uid, username, age) {
        this.username = username
        this.age = age
        this.uid = uid
    }

    save() {
        let users = []

        fs.readFile(pathFile, "utf8", (err, data) => {
            if(err) throw err

            users = JSON.parse(data)
            console.log(users)
            users.push({uid: this.uid, username: this.username, age: this.age})
            fs.writeFile(pathFile, JSON.stringify(users), (err) => {
                if(err) throw err
                console.log(`ok`)
            })
        })
    }

    static findAll() {
        const data = () => fs.readFileSync(pathFile, 'utf8')
        return JSON.parse(data())
    }
}