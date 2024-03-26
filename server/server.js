const express = require('express')
const bodyParser = require('body-parser')

const path = require('path')
const cors = require('cors')
const loginColl = require('./models/userDB') 
const {upload} = require('./models/imagesDB')
const {
    productHomeColl,
    computerColl,
    computerAccessoriesColl,
    mobileColl,
    mobileAccessoriesColl,
    homeAppliancesColl,
    toysColl
} = require('./models/productDB')
  
const app = express()

app.use(cors({origin:"http://localhost:3000", credentials: true}))


require('dotenv').config()

app.use(bodyParser.json({limit:'10mb'}))
app.use(bodyParser.urlencoded({extended:true, limit:'10mb'}))



app.get('/', (req, res, next) => {
    res.send("p");
})

app.post('/login', async (req, res, next) => {
    const { email, pass } = req.body
    const d = await loginColl.findOne({email:email.toLowerCase(),pass:pass})
    res.send((d == null) ? "not valid":(d.fname === "admin") ? "admin":"user")
})

app.post('/user', async (req, res, next) => {
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


app.post('/newuser', async (req, res, next) => {
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

app.post('/adminproductadd', async (req, res, next) => {
    const { email, pass } = req.body
/*     console.log(`Res : email = ${email} pass=${pass}`) */

    const userDb = await dbo.getDatabaseProduct()
    const homePageProductColl = await userDb.collection('homePageProduct')
    const d = await loginColl.insertOne({email:email.toLowerCase(),pass:pass})
/*     console.log(d) */

    res.send((d == null) ? "not valid":d)
})


app.post('/addproduct', async (req, res, next) => {

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

app.get('/homepage', async (req, res, next) => {
    const d = await productHomeColl.find({})
   
    res.status(200).send(d)

})


app.use(express.static('uploads'))


app.post('/upload', upload.single('image'), async (req, res) => {
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

app.post('/productview',(req, res, next) => {
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

app.post('/productcol',(req, res, next) => {
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
    else if (pcat === 'Computer Accessories'){
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

app.post('/neworder', async (req, res, next) => {
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
    console.log(odate)

    const d = await loginColl.updateOne({email:email}, {$push:{buy:{oid, odate, pid, pname, pcat, pprice, pqu, payo, door, street, landm, area, distric, state, pincode, phone, aphone}}})
    res.send(d.acknowledged)
})
/* users> db.logins.updateOne({email:'test@gmail.com'}, {$pull:{buy:{oid:1711371255282}}}) */

app.post('/myordercancle', async (req, res, next) => {

    const { umail, oid } = req.body

    const d = await loginColl.updateOne({email:umail}, {$pull:{buy:{oid:oid}}})
    console.log(d)
    res.send(d)

})


app.post('/myorder', async (req, res, next) => {

    const { umail } = req.body

    const d = await loginColl.findOne({email:umail})
   
    res.send(d)

})

app.post('/mycart', async (req, res, next) => {

    const { umail } = req.body

    const d = await loginColl.findOne({email:umail})
    console.log(d)
    
    res.send(d)

})

app.post('/mycartdel', async (req, res, next) => {

    const { umail, cid } = req.body

    const d = await loginColl.updateOne({email:umail}, {$pull:{cart:{cid:cid}}})
    console.log(d)
    res.send(d)

})

app.post('/newcart', async (req, res, next) => {

    const email = req.body.umail

    const cid = Date.now()

    const pid = req.body.pid
    const pname = req.body.pname 
    const pcat = (req.body.pcat).trim() 

    const pprice = Number((req.body.pprice).trim()) 
  
 

    const d = await loginColl.updateOne({email:email}, {$push:{cart:{cid, pid, pname, pcat, pprice}}})
    res.send(d.acknowledged)
})

app.listen(process.env.PORT || 5000 ,() => console.log(`Server Start at 5000`))