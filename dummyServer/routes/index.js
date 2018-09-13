const express = require('express');
var router = express.Router();

var {clientInfo} = require('../util');
var path = require('path');
var homePath = path.join(__dirname,'../');
/* get dummyServer HOME */

router.get('/',(req,res,next)=>{

    res.send('<h1> dummyServer Home </h1>');
        clientInfo(req);


});

module.exports = router;

