let express = require('express');
let router = express.Router();
let {register,login,update,profile} = require('../controller/user');
let { reg, log } = require('../middleware/midauth');

router.route('/singup').post(reg,register);
router.route('/singin').post(log,login);
router.route('/profile').patch(update).get(profile);


module.exports = router