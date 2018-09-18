var express = require('express');
var router = express.Router();
const faker = require('faker');
const url = require('url');
// query string은 express에서는 req.params 로 지원 해줌 
//const querystring = require('querystring');
const Joi = require('joi');
var {clientInfo} = require('../util');
/* GET Dummy Data Router */

/* test Data 3 Column && 5 Row */
router.get('/',(req,res,next)=>{

   try{
    console.log("[GET] Dummy Server Sample ");
    clientInfo(req);
    
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
    }
    catch(err){
        console.log(err);
    }

});

/* columns rows param 을 받아서
 *
 * 많은 양의 더미데이터를 뽑아 줌
 * */
router.get('/condition',(req,res,next)=>{
       
    try{
             console.log("[GET] Condition Dummy Server ");
             clientInfo(req);
        const fakerKey = ['address','commerce','company','database','date','finance','hacker',
                'helpers','image','internet','lorem','name','phone','random','system'];
        let fakerKeyValueArray=[];
        
        const validated = Joi.validate(req.query,Joi.object({rows: Joi.number().integer(),columns:Joi.number().integer()}));
       
         if(validated.error){
         /* handle validation error */
            throw 'validated Error';
        }
        const{rows,columns} = validated.value;
        if(typeof rows==='undefined'){
                throw "rows is undefined Throw Exception";   
        }       
        else if(typeof columns==='undefined'){
                throw "columns is undefined Throw Exception";
        }
        if( columns > 145 ){
                throw "columns support up to 145 ";         
        }
             Object.keys(faker).forEach( key=>{
                    if(fakerKey.includes(key)){
                        let mainKey = faker[key];
                        Object.keys(mainKey).forEach( key=>{
                                let obj = {
                                   [key]:mainKey[key]  
                                };
                               fakerKeyValueArray.push(Object.assign({},obj));        
                        });; 
                    }

            });
        let arr = Array.from(new Array(rows)).map(()=>{
                let obj={}; 
                for(let i=0;i<columns;i++){
                    let temp = fakerKeyValueArray[i];
                            Object.keys(fakerKeyValueArray[i]).forEach( key =>{
                                     obj[key] = temp[key]();
                            });                            
                }
                return obj;
        });            
        let arrJSON = JSON.stringify(arr);
        res.send(arrJSON);  
     }
    catch(err){ 
                console.log("---[ Condition ] Error ---");
                console.log(err); 
                res.send(err);
    }
});

module.exports = router;

