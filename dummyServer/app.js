
const express = require('express');
const path = require('path');
const cors = require('cors');
const url = require('url');

const fs = require('fs');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const dummyRouter = require('./routes/dummys');



const app = express();

app.use(cors());


app.use(express.static(path.join(__dirname,'public')));


app.use('/',indexRouter);
app.use('/dummys',dummyRouter);


/* Server Listen */
app.listen(3505,()=>{
    console.log("Running at TOP_QA Dummy Data Server Port:3505  Listening \n");
});



/* Server Error Handling MiddleWare */
app.use((err,req,res,next)=>{
        var statusCode = 500;
        res.status(statusCode).send(err.message);
});








