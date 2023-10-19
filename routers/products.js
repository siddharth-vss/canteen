let exprees = require('express');
let router = exprees.Router();
let {addfood , getfood} =require('../controller/food')

router.route('/').post(addfood).get(getfood);

module.exports = router;