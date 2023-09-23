const mongoose = require('mongoose')

require('dotenv').config()

const DB_URL = process.env.MONGODBURL

const Connect = async () => {
    try {
        await mongoose.connect(DB_URL)
    }
    catch (err) {
        console.log("Conneting DB Error", err.message)
    }


}

module.exports = Connect;
