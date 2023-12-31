
const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')


//userModel
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},
    {
        versionKey: false,
        timestamps: true

    }
)

//Hashing Password
UserSchema.pre('save', function (next) {

    if (!this.isModified("password")) return next()

    var hashPassword = bcrypt.hashSync(this.password, 8)

    this.password = hashPassword;                          // user given password is --> ysb@1232 --- hashing Password is --> $2a$08$TK2QcljCYmeg2etH2IPXJu0WGHPZM2hwW18GbdxCnN1UpffA7p9Ky

    return next()
})

//password authentication or password cheching
UserSchema.methods.CheckPassword = function (password) {
    return bcrypt.compareSync(password, this.password)

}


const User = mongoose.model("userauth", UserSchema)

module.exports = User






