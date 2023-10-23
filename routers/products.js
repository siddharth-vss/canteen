let exprees = require('express');
let router = exprees.Router();
let { addfood, getfood ,getfoodparam} = require('../controller/food')
router.route('/').post(addfood).get(getfood);
router.route('/:cat').get(getfoodparam);
module.exports = router;