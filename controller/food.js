let Food = require('../models/food');
// let bcrypt = require('bcryptjs');
// let jwt = require('jsonwebtoken');
// let dotenv = require('dotenv');
// let mongoose =require('mongoose');
const { body, validationResult } = require('express-validator');

// dotenv.config();


const addfood = async(req,res)=>{
    const{name,Price,url,Category,Description} = req.body;
    let ITEM = await Food.create({
        name:name,
        Price:Price,
        Description:Description,
        url: url,
        Category: Category
    })
    res.status(201).send(ITEM);
}

module.exports ={
    addfood,
}