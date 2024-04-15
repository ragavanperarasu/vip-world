const mongoose = require('mongoose')

require('dotenv').config();

var productDB = mongoose.createConnection('mongodb+srv://ragavan:HWZ9SaBwTkMnhkuV@vipworld.71hxkqc.mongodb.net/?retryWrites=true&w=majority');

var productHomeColl = productDB.model('homePageProducts', new mongoose.Schema({
    pcat: String,
    pname: String,
    pprice: String,
    pbrand: String,
    porg: String,
    pdet: String,
    show: String,
    img: String,
    pid: Number
}));

var computerColl = productDB.model('computer', new mongoose.Schema({
    pcat: String,
    pname: String,
    pprice: String,
    pbrand: String,
    porg: String,
    pdet: String,
    show: String,
    img: String,
    pid: Number
}));

var computerAccessoriesColl = productDB.model('computerAccessories', new mongoose.Schema({
    pcat: String,
    pname: String,
    pprice: String,
    pbrand: String,
    porg: String,
    pdet: String,
    show: String,
    img: String,
    pid: Number
}));

var mobileColl = productDB.model('mobile', new mongoose.Schema({
    pcat: String,
    pname: String,
    pprice: String,
    pbrand: String,
    porg: String,
    pdet: String,
    show: String,
    img: String,
    pid: Number
}));

var mobileAccessoriesColl = productDB.model('mobileAccessories', new mongoose.Schema({
    pcat: String,
    pname: String,
    pprice: String,
    pbrand: String,
    porg: String,
    pdet: String,
    show: String,
    img: String,
    pid: Number
}));

var homeAppliancesColl = productDB.model('homeAppliances', new mongoose.Schema({
    pcat: String,
    pname: String,
    pprice: String,
    pbrand: String,
    porg: String,
    pdet: String,
    show: String,
    img: String,
    pid: Number
}));

var toysColl = productDB.model('toys', new mongoose.Schema({
    pcat: String,
    pname: String,
    pprice: String,
    pbrand: String,
    porg: String,
    pdet: String,
    show: String,
    img: String,
    pid: Number
}));

module.exports = {productHomeColl, computerColl, computerAccessoriesColl, mobileColl,
mobileAccessoriesColl, homeAppliancesColl,toysColl};