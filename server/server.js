const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded())

app.get('/home', (req, res, next) => {
    res.send("<form action='/login' method='POST'><input type='text' name='name'><input type='submit'></form>");
})

app.post('/login', (req, res, next) => {
    console.log(req.body)
    res.send('<h1>Submitted</h1>')
})

app.listen(8081,() => console.log("Server Start"))