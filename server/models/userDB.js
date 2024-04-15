
const mongoose = require('mongoose')



var usersDB = mongoose.createConnection('mongodb+srv://ragavan:HWZ9SaBwTkMnhkuV@vipworld.71hxkqc.mongodb.net/?retryWrites=true&w=majority');

var loginModel = usersDB.model('login', new mongoose.Schema({
    fname: String,
    lname: String,
    phone: String,
    email: String,
    pass: String,
    buy: [
        {
            oid:Number,
            odate: String,
            pid: Number,
            pname: String,
            pcat: String,
            pprice: Number,
            pqu : Number,
            payo: String,
            door : String,
            street : String,
            landm : String,
            area : String,
            distric : String,
            state : String,
            pincode : Number,
            phone: Number,
            aphone: Number
        }
    ],
    cart: [
        {
            cid: Number,
            pid: Number,
            pname: String,
            pcat: String,
            pprice: Number
        }
    ]
    
}));

module.exports = loginModel

