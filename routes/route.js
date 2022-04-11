var express     = require('express');
var router      = express.Router();
const userRoute = require('./userRouts');









router.use('/user',userRoute);


module.exports = router;
