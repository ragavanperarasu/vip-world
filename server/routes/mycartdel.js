const express = require('express')
const router = express.Router()
const loginColl = require('./../models/userDB') 


router.post('/mycartdel', async (req, res, next) => {

    const { umail, cid } = req.body

    const d = await loginColl.updateOne({email:umail}, {$pull:{cart:{cid:cid}}})
 
    res.send(d)

})

module.exports = router