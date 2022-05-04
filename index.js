const express=require('express');
const app=express();
const mongoose=require('mongoose'); 
const path=require('path'); 
const Product=require('./models/products');
const seedDb=require('./seed');
const methodOverride=require('method-override');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views')); 
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));

// seedDb(); 
// Add Dummy Data in the database to create Database
mongoose.connect('mongodb://localhost:27017/space1')
.then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
console.log(err);
});


app.get('/',(req,res)=>{
    res.render('home');
});
 
app.get('/products',async(req,res)=>{
    const products=await Product.find({});
    res.render('index',{products});
});

app.get('/products/new',(req,res)=>{
    res.render('new'); 
});
app.post('/products',async(req,res)=>{
    const {name,desc}=req.body;

    await Product.create({name,desc});
    res.redirect('/products');
});
app.get('/products/:id',async(req,res)=>{
    const {id}=req.params; 
    const product=await Product.findById(id);
    res.render('show',{product});
});


app.listen(2323,()=>{
    console.log('server has been started');
})