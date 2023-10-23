let mongoose = require('mongoose');
let dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.DB)

let SPY = mongoose.Schema({
    name: String,
    email: String,
    phone_number: Number,
    password: String,
    location:String,
})

module.exports = mongoose.model('USER' , SPY);
