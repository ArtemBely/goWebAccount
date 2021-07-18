const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const customerSchema = new Schema({
   username:{type: String, required: true},
   userphone:{type: String, required: true},
   email:{type: String, required: true},
   timestamp: {type: String},
   password: {type: String, required: true},
   useraddress: {type: String, required: true},
   typeOfPayment: {type: String, required: true},
   typeOfSkin: {type: String},
   comments: {type: String},
   letter: {type: String}
});

module.exports = mongoose.model('Customer', customerSchema);
