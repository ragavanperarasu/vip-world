const express = require('express')
const router = express.Router()
const loginColl = require('./../models/userDB') 


router.post('/newcart', async (req, res, next) => {

    const email = req.body.umail

    const cid = Date.now()

    const pid = req.body.pid
    const pname = req.body.pname 
    const pcat = (req.body.pcat).trim() 

    const pprice = Number((req.body.pprice).trim()) 
  
 

    const d = await loginColl.updateOne({email:email}, {$push:{cart:{cid, pid, pname, pcat, pprice}}})
    res.send(d.acknowledged)
})

module.exports = router