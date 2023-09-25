
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: { type: String, require: true },
    image: { type: String, require: false },
    price: { type: Number, require: true },
    brand: { type: String, require: false, default: "Grambahar" },
    description: { type: String, require: false, default: "This is just demo Products" }

})


const Product = mongoose.model('product', ProductSchema)

module.exports = Product;

// module.exports = mongoose.model('product', ProductSchema)