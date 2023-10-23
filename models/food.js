let mongoose = require('mongoose')
let dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.DB);

let Meal = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    img: String,
    catagory: String,
    });

    module.exports = mongoose.model('food', Meal);