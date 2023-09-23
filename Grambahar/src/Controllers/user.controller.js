const User = require('../model/user.model')

const express = require('express')

const router = express.Router()

const CrudController = require('./Crud.controllers')


router.post('/', CrudController(User).post)

//getall
router.get('/', CrudController(User).GetAll)

//getOne
router.get('/:id', CrudController(User).GetOne)

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

//UpdateOne
router.patch('/:id', CrudController(User).updateOne)

// deleteOne
router.delete("/:id", CrudController(User).deleteOne)


// Delete Many
router.delete("/:id", async (req, resp) => {
    try {
        const DeleteItem = await User.deleteMany({ age: 30 }).lean().exec()    //delete those items whose age is 30
        // resp.send(DeleteItem)
        return resp.status(200).send(DeleteItem)
        // console.log(DeleteItem)

    } catch (e) {
        return resp.status(500).send(e.message)
    }

})


module.exports = router;



