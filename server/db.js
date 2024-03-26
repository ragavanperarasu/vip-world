const mongoose = require('mongoose')
require('dotenv').config();



var usersDB = mongoose.createConnection(process.env.DB_USERS);




async function getProductDb() {
    const porductDB = await mongoose.connect(process.env.DB_PRODUCT)
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Database not connected'));
    return porductDB
}
module.exports = usersDB