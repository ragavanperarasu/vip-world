const express = require('express')
const router = express.Router()
const loginColl = require('./../models/userDB') 


router.post('/myordercancle', async (req, res, next) => {

    const { umail, oid } = req.body

    const d = await loginColl.updateOne({email:umail}, {$pull:{buy:{oid:oid}}})
 
    res.send(d)

})

module.exports = router