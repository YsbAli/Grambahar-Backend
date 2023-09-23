
const express = require('express')

const router = express.Router()

const CrudController = require('./Crud.controllers')

const Product = require('../model/product.model')


//  ---------------Crud Apis------------

// getall products api
router.get("/", CrudController(Product).GetAll)

// get one Products api
router.get("/:id", CrudController(Product).GetOne)

// post api
router.post("/", CrudController(Product).post)

// update api
router.patch("/:id", CrudController(Product).updateOne)

// delete api
router.delete("/:id", CrudController(Product).deleteOne)



// Delete Many
router.delete("/:id", async (req, resp) => {
    try {
        const DeleteItem = await User.deleteMany({ price: 1000 }).lean().exec()    //delete those items whose age is 30
        // resp.send(DeleteItem)
        return resp.status(200).send(DeleteItem)
        // console.log(DeleteItem)

    } catch (e) {
        return resp.status(500).send(e.message)
    }

})



// Only for Status Code 404
router.get('/', async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        if (users) {
            res.send(users)
        } else {
            res.status(404).send({ message: "User Not Found" })
        }
    } catch (e) { console.log(e.message) }

})

module.exports = router;