var express = require('express');
var router = express.Router();
const faker = require('faker');

/* GET Dummy Data Router */

/* test Data 3 Column && 5 Row */
router.get('/',(req,res,next)=>{
        console.log("[GET] Dummy Server ");


/* faker.helpers.createCard() */

var arr = Array.from(new Array(200)).map(()=>{
    return {
        id:faker.random.number(),
        password:faker.internet.password(),
        email:faker.internet.email(),
        protocol:faker.internet.protocol(),
        userAgent:faker.internet.userAgent(),
        mac :faker.internet.mac(),
    };
});
var arrJSON = JSON.stringify(arr);
       res.send(arrJSON);
});


router.get('/huge',(req,res,next)=>{
    console.log("[GET] Huge Dummy Server ");
    res.send('');

/*
 
   Array.from(new Array(100000)).map(()=>
    return {
        id:faker.random.number(),
        email:faker.internal.email(),
    }

    }); 
 
  */


});

module.exports = router;

