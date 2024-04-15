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


router.post('/productcol',(req, res, next) => {
    const pcat = req.body.pcat
    const pageno = req.body.pageno 

    async function prouductView(pcat, pageno){
        const colCount = await pcat.find({}).count()
        const datalimit = 7
        const product = await pcat.find({}).skip(pageno * datalimit-7).limit(datalimit)
        const data = {
            colCount:colCount,
            product:product
        }
        
        res.status(200).send(data)
    }
    

    if (pcat === 'Computer'){
        prouductView(computerColl, pageno)
    }
    else if (pcat === 'Computer Accsoeries'){
        console.log("enter")
        prouductView(computerAccessoriesColl, pageno)
    }
    else if (pcat === 'Mobile'){
        prouductView(mobileColl, pageno)
    }
    else if (pcat === 'Mobile Accessories'){
        prouductView(mobileAccessoriesColl, pageno)
    }
    else if (pcat === 'Home Appliances'){
        prouductView(homeAppliancesColl, pageno)
    }
    else if (pcat === 'Toys'){
        prouductView(toysColl, pageno)
    }
    
    

})

module.exports = router