
const express = require('express')

const router = express.Router()

const CrudController = require('./Crud.controllers')

const Product = require('../model/product.model')


// router.get("/", async (req, resp) => {

//     try {
//         const product = await Product.find().lean().exec()
//         return resp.send(product)
//     }
//     catch (err) {
//         return resp.status(500).send(err.message)
//     }

// })

//  App Api 
router.get("/", CrudController(Product).GetAll)
router.get("/:id", CrudController(Product).GetOne)
router.get("/", CrudController(Product).post)
router.get("/:id", CrudController(Product).updateOne)
router.get("/:id", CrudController(Product).deleteOne)


