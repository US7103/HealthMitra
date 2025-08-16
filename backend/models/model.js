const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/healthians')

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