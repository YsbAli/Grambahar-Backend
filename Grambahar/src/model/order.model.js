








const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    // "orderDate": Date,
        "customer": {
        "customerId": {                        
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },        
    },
        "products": [

            {
                "productId": {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "product",
                    required: true,
                },
                "quantity": Number
            },
        ],
        "totalPrice": Number,
        "status": String                        // Order status (e.g., "Pending", "Shipped", "Delivered", etc.)
})

const Order = mongoose.model('order', OrderSchema)

module.exports = Order;




