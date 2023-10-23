let Food = require('../models/food');
// let bcrypt = require('bcryptjs');
// let jwt = require('jsonwebtoken');
// let dotenv = require('dotenv');
// let mongoose =require('mongoose');
// const { body, validationResult } = require('express-validator');

// dotenv.config();


const addfood = async(req,res)=>{
    console.log(req.body)
    const{name,price,img,category,description} = req.body;
    let ITEM = await Food.create({
        name:name,
        price:price,
        description:description,
        img: img,
        catagory: category
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
const getfoodparam = async(req,res) =>{
    let item =  await Food.find({catagory : req.params.cat});
    if (!item) {
        console.log(req.params.cat,"daffa ho");
        res.send("daffaa ho")
    
    }
   if(item){
   try {
    res.json(item);
    console.log(req.params.cat,"ggwp");
   } catch (error) {
 console.log(error)   
   }

}
}


module.exports ={
    addfood,
    getfood,
    getfoodparam

}