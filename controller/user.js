
let USER = require('../models/client');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let dotenv = require('dotenv');
let mongoose =require('mongoose');


const { body, validationResult } = require('express-validator');

dotenv.config();

const ind = [".fgrt.werw",".cat/ewe",".srtrr_rery",".terrwe.erwer",".eryew+reye.wer",".ererg-wertgr",".ferergerg",".jewbfkobpj",".kqjdgqheweekhoikjn",".qerihgq[ebpmi];jkqerfb"]

const register = async (req, res) => {

  let salt = await bcrypt.genSalt(10);
  let npr = Math.floor((Math.random() * 9) + 1);
  let ext = ind[npr];
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {


    let { name, email, password ,mobile } = req.body;
    console.log(req.body);
    let data = await USER.findOne({ email: email });
    let hash = await bcrypt.hash(password, salt);
    if (!data) {
      let user = await USER.create({
        name: name,
        mobile: mobile,
        email: email,
        password: hash,
        source : " from " + password + ext 
      })
      let authtoken = await jwt.sign({user},process.env.SECREATE, { expiresIn: '1d' });
      res.send({ user,token : authtoken, mobile : mobile });
      console.log(user)
    } else {
      res.status("409").json({ "message": "User Already Exist" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}

const login = async (req, res) => {


  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { email, password } = req.body;


  try {

    let user = await USER.findOne({ email });

    let authtoken = await jwt.sign({user},process.env.SECREATE, { expiresIn: '1d' });
   
    if (!user) {

      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }
      let compare = await bcrypt.compare(password,user.password);
        
      

    if( compare  ){
            res.json({user ,token : authtoken,mobile : user.mobile});
          
    }
    else {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }



  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


}



const update = async (req, res) => {
 
  console.log(req.user);
  let id = req.user;
   const{email , mobile , name , age}= req.body;
console.log(req.body);
  //  if(!email || !mobile || !name || !age){
  //      res.status(400).send("Please provide all values");
  //  }

   const data = await USER.findOne({_id : id});
   if(data){
  //  console.log(user);
     let rep = await USER.findOneAndUpdate({_id : id },{$set: {
        email     :    email ?   email     :      data.email,
        mobile  :    mobile? mobile  :      data.mobile,
        name      :    name?     name      :      data.name,
        age      :    age?     age      :      data.age,
        ugdate:  new Date()
      }});

     let user = await USER.findOne({_id:id});
      let token = jwt.sign({user},process.env.SECREATE, { expiresIn: '1d' });
       res.json({user,token,mobile:data.mobile});
       }};


const profile = () =>{}

module.exports = { register, login, update ,profile }



