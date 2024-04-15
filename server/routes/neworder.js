const express = require('express')
const router = express.Router()
const loginColl = require('./../models/userDB') 


router.post('/neworder', async (req, res, next) => {
    const email = req.body.umail
    const pid = Number((req.body.pid).trim()) 
    const pname = req.body.pname 
    const pcat = (req.body.pcat).trim() 

    const pprice = Number((req.body.pprice).trim()) 
    const pqu = Number((req.body.pqu).trim())
    const payo = req.body.payo 
    
    const door = req.body.door
    const street = req.body.street 
    const landm = req.body.landm 
    const area = req.body.area 
    const distric = req.body.distric 
    const state = (req.body.state).trim() 
    const pincode = Number((req.body.pincode).trim())
    
    const phone = Number((req.body.phone).trim()) 
    const aphone = Number((req.body.aphone).trim())

    const date = new Date()

    const odate = `${date.getDate()}-${1+date.getMonth()}-${date.getFullYear()}`
    const oid = Date.now()
   

    const d = await loginColl.updateOne({email:email}, {$push:{buy:{oid, odate, pid, pname, pcat, pprice, pqu, payo, door, street, landm, area, distric, state, pincode, phone, aphone}}})
    res.send(d.acknowledged)
})

module.exports = router