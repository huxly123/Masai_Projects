const express=require('express');
const app=express();
app.use(express.json());
const mongoose=require('mongoose');
const connect=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/library")
}

//---------------------       creating user schema-----------------------
const userSchema=new mongoose.Schema({
    id:{type:String,required:true},
    first_name:{type:String,required:true},
    gender:{type:String,required:true}
})

const User =mongoose.model("user",userSchema)

//----------------------------  creating section schema ------------------

const sectionSchema=new mongoose.Schema({
    name:{type:String,required:true},
    body:{type:String,required:true}
},{
    versionKey:false,
    
})

const Section =mongoose.model("section",sectionSchema);

// ------------------------------creating author schema ------------

const authorSchema=new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    gender:{type:String,required:false}
},{
    versionKey:false
})
 
const Author=mongoose.model("author",authorSchema);

// ---------------------------  creating books schema-------------------
const booksSchema=new mongoose.Schema({
    name:{type:String,required:true},
    body:{type:String,required:true},
    section:{type:mongoose.Schema.Types.ObjectId,ref:"section",required:true},
    author:[{type:mongoose.Schema.Types.ObjectId,ref:"author",required:true}],
    checkout:{type:mongoose.Schema.Types.ObjectId,ref:"checkouts",required:false}
},{
    versionKey:false,
    timestamps:true
}
)

const Book=mongoose.model("book",booksSchema);

// -------------------------creating checkout schema -------------------------

const checkoutSchema=new mongoose.Schema({
    checkedout:{type:Boolean,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    book:{type:mongoose.Schema.Types.ObjectId,ref:"book",required:true}
},{
    versionKey:false,
    timestamps:true
})

const Checkout=mongoose.model("checkout",checkoutSchema)
// ------------------CRED API user ------------
app.post("/users",async (req,res)=>{
    const users=await User.create(req.body);
    res.status(200).send({users})
})

app.get("/users",async (req,res)=>{
    const users=await User.find().lean().exec();
    res.status(200).send({users})
})

//----------------------- CRED API section--------------
app.post("/sections",async (req,res)=>{
    const sections=await Section.create(req.body);
    res.status(200).send({sections})
})

app.get("/sections",async (req,res)=>{
    const sections=await Section.find().lean().exec();
    res.status(200).send({sections})
})

app.get("/sections/:id/books",async (req,res)=>{
    const books=await Book.find({section:req.params.id}).lean().exec();
    const section=await Section.findById(req.params.id).lean().exec();
    res.status(200).send({books,section})
})



//----------------------- CRED API books--------------
app.post("/books",async (req,res)=>{
    const books=await Book.create(req.body);
    res.status(200).send({books})
})

app.patch("/books/:id",async(req,res)=>{
    const books=await Book.findByIdAndUpdate(req.body);
    res.status(200).send(books)
}) 

app.get("/books",async (req,res)=>{
    const books=await Book.find().lean().exec();
    res.status(200).send({books})
})

app.get("/books/:id/checkouts",async (req,res)=>{
    const checkout=await Checkout.find({book:req.params.id}).lean().exec();
    const book=await Book.findById(req.params.id).lean().exec();
    res.status(200).send({checkout,book})
})

app.get("/books/authors",async (req,res)=>{
    const books=await Book.find().lean().exec();
  
    books.forEach( function(book){
        if(book.author.length==1){
            res.status(200).send({book})
        }
      
})
})

// app.get("/books/checkouts",async (req,res)=>{
//     const books=await Book.find().lean().exec();
  
//     books.forEach( function(book){
//         if(book.checkout.checkedout==true){
//             res.status(200).send({book})
//         }
      
// })
// })
//----------------------- CRED API authors--------------
app.post("/authors",async (req,res)=>{
    const author=await Author.create(req.body);
    res.status(200).send({author})
})

app.get("/authors",async (req,res)=>{
    const author=await Author.find().lean().exec();
    res.status(200).send({author})
})

app.get("/authors/:id/books",async (req,res)=>{
    const books=await Book.find({author:req.params.id}).lean().exec();
    const author=await Author.findById(req.params.id).lean().exec();
    res.status(200).send({books,author})
})

//----------------------- CRED API checkout--------------
app.post("/checkouts",async (req,res)=>{
    const checkout=await Checkout.create(req.body);
    res.status(200).send({checkout})
})

app.get("/checkouts",async (req,res)=>{
    const checkout=await Checkout.find().lean().exec();
    res.status(200).send({checkout})
})








app.listen("5555",async ()=>{
await connect();
console.log("listening");
})