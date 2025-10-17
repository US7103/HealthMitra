const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://recruiter_com:Mycart12119@utkarsh.lx0codb.mongodb.net/')

const tera=mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    disease:String,
    stat:String,
    address:String,
    parcha: {
  original: String,
  stored: String
}
})


module.exports=mongoose.model('tera',tera);
