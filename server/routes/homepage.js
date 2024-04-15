const express = require('express')
const router = express.Router()
const {productHomeColl} = require('./../models/productDB')


router.get('/homepage', async (req, res, next) => {
    const d = await productHomeColl.find({})
    res.status(200).send(d)
})


module.exports = router