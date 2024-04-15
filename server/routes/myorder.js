const express = require('express')
const router = express.Router()
const loginColl = require('./../models/userDB') 


router.post('/myorder', async (req, res, next) => {

    const { umail } = req.body

    const d = await loginColl.findOne({email:umail})
   
    res.send(d)

})

module.exports = router