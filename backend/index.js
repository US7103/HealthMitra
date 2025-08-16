
const express=require('express');

const app=express();
require('dotenv').config();

const router=require('./router/router');
const cors=require('cors');

const path=require('path');

app.use(cors({origin:'http://localhost:5173'}));

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/healthy',router);

app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Server is running on port 3000');
    }
})