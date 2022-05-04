const mongoose=require('mongoose');


const produtSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    desc:{
        type:String,
        trim:true,
        required:true
    }
});

const Product=mongoose.model('Product',produtSchema);
 
module.exports=Product;