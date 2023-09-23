
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: { type: String, require: true },
    price: { type: String, require: true },
    brand: { type: String, require: true },
    // image: {type : String, require:true},
    description: { type: String, require: false, default: "This is jus demo Products" }

})


const Product = mongoose.model('product', ProductSchema)

module.exports = Product;

// module.exports = mongoose.model('product', ProductSchema)