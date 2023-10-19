let Food = require('../models/food');
// let bcrypt = require('bcryptjs');
// let jwt = require('jsonwebtoken');
// let dotenv = require('dotenv');
// let mongoose =require('mongoose');
// const { body, validationResult } = require('express-validator');

// dotenv.config();


const addfood = async(req,res)=>{
    const{name,price,img,category,description} = req.body;
    let ITEM = await Food.create({
        name:name,
        Price:price,
        description:description,
        img: img,
        category: category
    })
    res.status(201).send(ITEM);
}

const getfood = async(req,res) =>{
   let item =  await Food.find();
   if(item){
   try {
    res.json(item);
   } catch (error) {
 console.log(error)   
   }

}
if (!item) {
    return;
}
}


module.exports ={
    addfood,
    getfood,

}