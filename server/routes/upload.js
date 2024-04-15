const express = require('express')
const router = express.Router()
const {upload} = require('./../models/imagesDB')
const {
    productHomeColl,
    computerColl,
    computerAccessoriesColl,
    mobileColl,
    mobileAccessoriesColl,
    homeAppliancesColl,
    toysColl
} = require('./../models/productDB')




router.post('/upload', upload.single('image'), async (req, res) => {
    const obj = JSON.parse(JSON.stringify(req.body));
    const pcat = obj.col
    const pid = Number(obj.id)
    const show = obj.show

    async function imgAddProduct(pid, col){
        const f = "http://localhost:5000/products/product_"+ req.file.originalname
        await col.updateOne({'pid': pid},{$set:{'img': f}})
    }

    if (pcat === 'Computer'){
        imgAddProduct(pid, computerColl)
    }
    else if (pcat === 'Computer Accessories'){
        imgAddProduct(pid, computerAccessoriesColl)
    }
    else if (pcat === 'Mobile'){
        imgAddProduct(pid, mobileColl)
    }
    else if (pcat === 'Mobile Accessories'){
        imgAddProduct(pid, mobileAccessoriesColl)
    }
    else if (pcat === 'Home Appliances'){
        imgAddProduct(pid, homeAppliancesColl)
    }
    else if (pcat === 'Toys'){
        imgAddProduct(pid, toysColl)
    }

    if (show === 'home'){
        imgAddProduct(pid, productHomeColl)
    }
    
    res.send('done')
})

module.exports = router