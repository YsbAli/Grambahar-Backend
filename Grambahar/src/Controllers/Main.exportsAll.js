//import all controller
const UserController = require("./user.controller")
const ProductController = require("./product.controller")
const AuthControler = require("../auth/auth")
const OderController = require("../Controllers/order.controller")

//exports all controllers
module.exports = { UserController, ProductController, OderController }