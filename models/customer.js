const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name : String,
    memberid : String,
    address : String,
    zipcode : String,
    phone : String
})

const customerModel = mongoose.model('Customer', customerSchema);

module.exports = customerModel