require('dotenv').config();
const express=require('express');
const app=express();
const router=express.Router();
const tera=require('../models/model');
const nodemailer=require('nodemailer');

const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.use(express.json());

const multer=require('multer');

const upload = multer({
  dest: 'public/images/',
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only images allowed'), false);
  }
});



router.get('/',async (req,res)=>{
    const tead=await tera.find();
    res.status(200).json(tead);

    
})

router.post('/', upload.single('parcha') ,async (req, res)=>{
    const {name,age,email,disease,stat,address}=req.body;
    const parcha = req.file ? {
  original: req.file.originalname,
  stored: req.file.filename
} : null;

    const head= await tera.create({
        name,
        age,
        email,
        disease,
        stat,
        address,
        parcha
    })


// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "savarnutkarsh@gmail.com",
    pass: process.env.GOOGLE_API,
  },
});

// Wrap in an async IIFE so we can use await.
(async () => {
  const info = await transporter.sendMail({
    from: 'savarnutkarsh@gmail.com',
    to: email,
    subject: "System Notification",
    text: `Hello ${name} \n Your appointment has been successfully booked. \n Details: \n Age: ${age} \n Disease: ${disease} \n Status: ${stat} \n Address: ${address} \n Thank you for using our service!`, 
  });

  console.log("Message sent:", info.messageId);
})();
    res.status(201).json(head);
})





router.put(`/:_id`, upload.single('parcha') ,async (req,res)=>{
    const {name,age,email,disease,stat,address}=req.body;
    
    const updateData={...req.body};
    if(req.file){
      updateData.parcha ={
        original:req.file.originalname,
        stored:req.file.filename
      }
    }

    const heal=await tera.findByIdAndUpdate(req.params._id, updateData , {new: true});

  const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "savarnutkarsh@gmail.com",
    pass: process.env.GOOGLE_API,
  },
});

// Wrap in an async IIFE so we can use await.
(async () => {
  const info = await transporter.sendMail({
    from: 'savarnutkarsh@gmail.com',
    to: email,
    subject: "System Notification",
    text: `Hello ${name} \n Your appointment has been successfully Updated. \n Details: \n Age: ${age} \n Disease: ${disease} \n Status: ${stat} \n Address: ${address} \n Thank you for using our service & Check the details properly now its updated!`, 
  });

  console.log("Message sent:", info.messageId);
})();
    res.status(200).json(heal);
})

router.get(`/search`,async (req,res)=>{

   const {email}=req.query;
   const limit=parseInt(req.query.limit) || 10;
   
   if(!email){
    res.status(400).json({error:"Email Query is Required"});
   }
   
   const fond = await tera.find({
    email: { $regex: `^${email}$`, $options: "i" }
  }).limit(limit);

   res.status(200).json(fond);
})



router.delete(`/:_id`, async (req,res)=>{
    const del=await tera.findByIdAndDelete((req.params._id));
    res.status(200).json(del);
})

module.exports=router;
