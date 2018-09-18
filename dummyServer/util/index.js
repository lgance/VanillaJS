

function clientInfo(req){
    if(!req){console.log('req is not Exist')};
            console.log("Connect Clinet IP ",req.ip);
}


module.exports ={
 clientInfo,
}
