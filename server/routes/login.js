const express = require('express')
const router = express.Router()
const loginColl = require('./../models/userDB') 


router.post('/login', async (req, res, next) => {
    const { email, pass } = req.body
    const d = await loginColl.findOne({email:email.toLowerCase(),pass:pass})
    res.send((d == null) ? "not valid":(d.fname === "admin") ? "admin":"user")
})

module.exports = router