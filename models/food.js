let mongoose = require('mongoose')
let dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.DB);

let Meal = mongoose.Schema({

 name:String,
 Price:Number,
 Description: String,
 url: String,
 Category: {type : Array , default : []}
 
});

module.exports = mongoose.model('food',Meal);