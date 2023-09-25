
// Register

const User = require("../model/admin.model")

const JWT = require("jsonwebtoken")

require("dotenv").config()


const NewToken = (user) => {
    const jwtToken = JWT.sign({ user }, process.env.JWT_SECRET_KEY)
    return jwtToken;
}

const Register = async (req, resp) => {
    try {
        let user = await User.findOne({ email: req.body.email }).lean().exec()
        if (user) {
            return resp.status(400).send({ message: "Email is Already Exists" })
        }
        
        user = await User.create(req.body)

        const token = NewToken(user)

        return resp.status(200).send({ user, token })
    }
    catch (err) {
        return resp.status(500).send(err.message)
    }

}



// Login
const Login = async (req, resp) => {
    try {

        const user = await User.findOne({ email: req.body.email })

        if (!user) {
            return resp.status(400).send({ message: "Please try another email or password" })
        }
        const match = user.CheckPassword(req.body.password)

        if (!match) {
            return resp.status(400).send({ message: "Please try another email or password" })
        }

        const token = NewToken(user)

        return resp.status(200).send({ user, token })
    }
    catch (err) {
        return resp.status(500).send(err.message)
    }
}

module.exports = { Register, Login }













