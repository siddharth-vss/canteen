let exprees = require('express');
let router = exprees.Router();
let {addfood} =require('../controller/food')

router.route('/').post(addfood);

module.exports = router;