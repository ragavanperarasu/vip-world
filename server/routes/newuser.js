const express = require('express')
const router = express.Router()
const loginColl = require('./../models/userDB') 

router.post('/newuser', async (req, res, next) => {
    const { fname, lname, phone, email, pass } = req.body
    const de = await loginColl.findOne({email:email.toLowerCase()})
    const dp = await loginColl.findOne({phone:phone})
    if (de !== null) {
        res.send("email not valid")
    }
    else if (dp !== null) {
        res.send("phone not valid")
    }
    else {
        const s = await loginColl.create(
            {
                fname:fname.toLowerCase(),
                lname:lname.toLowerCase(),
                phone:phone,
                email:email.toLowerCase(),
                pass:pass
            }
        )
        res.send("add successfully")
    }

    
})

module.exports = router