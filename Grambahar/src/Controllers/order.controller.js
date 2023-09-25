
const express = require('express')

const router = express.Router()

const CrudController = require('./Crud.controllers')

const Order = require('../model/order.model')


//  ---------------Crud Apis------------

// getall products api
router.get("/", CrudController(Order).GetAll)

// get one Products api
router.get("/:id", CrudController(Order).GetOne)


// post api
router.post("/", CrudController(Order).post)

// update api
router.patch("/:id", CrudController(Order).updateOne)


module.exports = router;