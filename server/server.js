const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');
const app = express()
require('dotenv').config()

const login = require('./routes/login.js')
const user = require('./routes/user.js')
const newuser = require('./routes/newuser.js')
const addproduct = require('./routes/addproduct.js')
const homepage = require('./routes/homepage.js')
const upload = require('./routes/upload.js')
const productview = require('./routes/productview.js')
const productcol = require('./routes/productcol.js')
const neworder = require('./routes/neworder.js')
const myorder = require('./routes/myorder.js')
const myordercancle = require('./routes/myordercancle.js')
const mycart = require('./routes/mycart.js')
const mycartdel = require('./routes/mycartdel.js')
const newcart = require('./routes/newcart.js')


app.use(cors({ credentials: true}))

app.use(bodyParser.json({limit:'10mb'}))
app.use(bodyParser.urlencoded({extended:true, limit:'10mb'}))
app.use(express.static('uploads'))




app.use('/', login)
app.use('/', user)
app.use('/', newuser)
app.use('/', addproduct)
app.use('/', homepage)
app.use('/', upload)
app.use('/', productview)
app.use('/', productcol)
app.use('/', neworder)
app.use('/', myorder)
app.use('/', myordercancle)
app.use('/', mycart)
app.use('/', mycartdel)
app.use('/', newcart)

app.use(express.static(path.join(__dirname, '../client/build')))

app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'))

})


app.listen(process.env.PORT || 5000 ,() => console.log(`Server Start at 5000`))