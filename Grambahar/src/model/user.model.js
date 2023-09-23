const mongoose = require('mongoose')


// Address Schema 
const addressSchema = new mongoose.Schema({
    street: { type: String, require: false },
    city: { type: String, require: false },
    state: { type: String, require: false, default: "West Bengal" },
    postalCode: { type: String, require: true , default : "700002"},
    country: { type: String, require: false, default: "India" },
});

const userSchema = new mongoose.Schema({
    id: { type: Number, require: true, unique: true },  //not _id
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    gender: { type: String, require: false, default: "Male" },
    // Address: [{ type: String, require: false }],
    Address: [addressSchema]
},
    {
        versionKey: false,    //remove __v
        timestamps: true,     //add 2 fields -- createdat and UpdatedAt

    }
)


const User = mongoose.model("user", userSchema)

module.exports = User

// module.exports = mongoose.model("user", userSchema)     //directly exports
