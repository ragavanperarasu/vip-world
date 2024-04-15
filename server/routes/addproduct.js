const express = require('express')
const router = express.Router()
const {
    productHomeColl,
    computerColl,
    computerAccessoriesColl,
    mobileColl,
    mobileAccessoriesColl,
    homeAppliancesColl,
    toysColl
} = require('./../models/productDB')


router.post('/addproduct', async (req, res, next) => {

    function toTitleCase(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
    }

    async function addProd(pcat, pname, pprice, pbrand, porg, pdet, show, pid, coll){
        const d = await coll.create(
            {
                pcat:pcat,
                pname:pname, 
                pprice:pprice, 
                pbrand:toTitleCase(pbrand),
                porg:toTitleCase(porg),
                pdet:pdet,
                show:show,
                img: 'img',
                pid:pid
            }
        )

        return d
       
    }

    const { pcat, pname, pprice, pbrand, porg, pdet, show} = req.body

    let r;
    let pid = Date.now()

    if (pcat === 'Computer'){
        r = await addProd(pcat, pname, pprice, pbrand, porg, pdet, show, pid, computerColl)
    }
    else if (pcat === 'Computer Accessories'){
        r = await addProd(pcat, pname, pprice, pbrand, porg, pdet, show, pid, computerAccessoriesColl)
    }
    else if (pcat === 'Mobile'){
        r = await addProd(pcat, pname, pprice, pbrand, porg, pdet, show, pid, mobileColl)
    }
    else if (pcat === 'Mobile Accessories'){
        r = await addProd(pcat, pname, pprice, pbrand, porg, pdet, show, pid, mobileAccessoriesColl)
    }
    else if (pcat === 'Home Appliances'){
        r = await addProd(pcat, pname, pprice, pbrand, porg, pdet, show, pid, homeAppliancesColl)
    }
    else if (pcat === 'Toys'){
        r = await addProd(pcat, pname, pprice, pbrand, porg, pdet, show, pid, toysColl)
    }

    if (show === 'home'){
        r = await addProd(pcat, pname, pprice, pbrand, porg, pdet, show, pid, productHomeColl)
    }
    
    res.json({
        col: r.pcat,
        pid: pid,
        show: r.show,
        st:'done'
    })

})

module.exports = router