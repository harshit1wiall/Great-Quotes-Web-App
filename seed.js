const mongoose=require('mongoose');
const Product=require('./models/products');


const products=[
    {
        name:'Mahatma Gandhi',
        desc:'“Be the change that you wish to see in the world.” ...'
    }
]

const seedDb=async()=>{
    await Product.deleteMany({}); 
    await Product.insertMany(products);
    console.log("Db Seeded");
}

module.exports=seedDb;