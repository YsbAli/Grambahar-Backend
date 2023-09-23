
const express = require('express')
const app = express()
require("dotenv").config()

const port = process.env.PORT

const ConnectDB = require('./configs/db')

const { UserController } = require('./Controllers/Main.exportsAll')
const { ProductController}  = require('./Controllers/Main.exportsAll')

app.use(express.json())                                      // it will read the  request and convert req.body into json objects

// use the controllers
app.use("/users", UserController)
app.use("/products", ProductController)


app.listen(port, () => {
    ConnectDB()
    console.log(`listening on ${port}`)
})



































// const express = require('express')
// const app = express()
// require('dotenv').config()

// const Connect = require('./configs/db')

// const port = process.env.PORT
// app.use(express.json())                                      // it will read the  request and convert req.body into json objects

// const UserController = require('./controllers/user.controller')

// app.use("/users", UserController)




// app.listen(port, () => {
//     Connect()

//     console.log(`listening on ${port}`)
// })














// const mongoose = require('mongoose')

// const productSchema = new mongoose.Schema({
//     id: { type: Number, require: true, unique: true },  //not _id
//     image: { type: String, require: true },
//     name: { type: String, require: true },
//     title: { type: String, require: true },
//     price: { type: String, require: true },
//     description: { type: String, require: true },
// },
//     {
//         versionKey: false,
//         timestamps: true,
//     }
// )


// const Product = mongoose.model("product", productSchema)

// module.exports = Product
// // module.exports = mongoose.model("product", productSchema)     