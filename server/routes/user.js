const express = require('express')
const router = express.Router()
const loginColl = require('./../models/userDB') 

router.post('/user', async (req, res, next) => {
    const { email } = req.body

    const d = await loginColl.findOne({email:email})
    function toTitleCase(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
      }
      
    res.send(toTitleCase(d.fname)+" "+toTitleCase(d.lname))

})

module.exports = router