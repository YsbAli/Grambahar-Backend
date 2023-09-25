
const express = require('express')
const app = express()
require("dotenv").config()

const port = process.env.PORT

const ConnectDB = require('./configs/db')

const { UserController, ProductController, OderController } = require('./Controllers/Main.exportsAll')


const { Register, Login } = require("./auth/auth")

app.use(express.json())                                      // it will read the  request and convert req.body into json objects

// use the controllers
app.use("/users", UserController)

app.use("/products", ProductController)

app.use("/orders", OderController)


//Register
app.post("/register", Register)

app.post("/login", Login)

app.listen(port, () => {
    ConnectDB()
    console.log(`listening on ${port}`)
})

