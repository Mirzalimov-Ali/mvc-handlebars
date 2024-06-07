const fs = require('fs')
const path = require("path")

const pathFile = path.join(__dirname, "../data/products.json")

module.exports = class Product {
    constructor(uid, productName) {
        this.uid = uid
        this.productName = productName
    }

    save() {
        let products = []

        fs.readFile(pathFile, 'utf8', (err, data) => {
            if(err) throw err

            products = JSON.parse(data)
            console.log(products)
            products.unshift({uid: this.uid, productName: this.productName})

            fs.writeFile(pathFile, JSON.stringify(products), (err) => {
                if(err) throw err
                console.log(`success`)
            })
        })
    }

    static findAll() {
        const data = () => fs.readFileSync(pathFile, 'utf8')
        return JSON.parse(data())
    }
}