const express = require('express')
const router = express.Router()
const {
    computerColl,
    computerAccessoriesColl,
    mobileColl,
    mobileAccessoriesColl,
    homeAppliancesColl,
    toysColl
} = require('./../models/productDB')


router.post('/productview',(req, res, next) => {
    const pcat = req.body.pcat 
    const pid = req.body.pid

    async function prouductView(pid, pcat){
        const d = await pcat.findOne({'pid':pid})
        res.status(200).send(d)
    }
    
    if (pcat === 'Computer'){
        prouductView(pid, computerColl)
    }
    
    else if (pcat === 'Computer Accessories'){
        
        prouductView(pid, computerAccessoriesColl)
    }
    else if (pcat === 'Mobile'){
        prouductView(pid, mobileColl)
    }
    else if (pcat === 'Mobile Accessories'){
        prouductView(pid, mobileAccessoriesColl)
    }
    else if (pcat === 'Home Appliances'){
        prouductView(pid, homeAppliancesColl)
    }
    else if (pcat === 'Toys'){
        prouductView(pid, toysColl)
    }
    
    

})

module.exports = router