const express=require('express');

const router=express.Router();

const { body, validationResult } = require('express-validator');

const Book=require("../models/book.model");

const User=require("../models/user.model")

router.post("",
body('price',"price is empty").notEmpty(),
body('title',"Length less than 5").notEmpty().isLength({min:5}),
body("edition").custom(value=>{
 if(value<=0){
   throw new Error('value less than 0')
 }
 return true
}),
async (req,res)=>{
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      let finalerror=null;
    //  console.log(errors);
      finalerror=errors.array().map(error=>{
        return{
          param:error.param,
          msg:error.msg
        }
      })
    
      return res.status(400).json({ errors: finalerror});
    }
    try{
    const book=await Book.create(req.body);

    return res.status(201).json({book})
    }catch(err){
        console.log(err);
        return res.status(400).send(err.message)
    }
})



router.patch('/:bookId',
body("author").custom(async (value,{req})=>{

 const book=await Book.findById(req.params.bookId).lean().exec();

 if(book.author !=value) throw new Error("person cannot edit book");
 return true

}),
async (req,res)=>{
  const errors = validationResult(req);
  console.log(req);
  if (!errors.isEmpty()) {
    let finalerror=null;
  //  console.log(errors);
    finalerror=errors.array().map(error=>{
      return{
        param:error.param,
        msg:error.msg
      }
    })
  
    return res.status(400).json({ errors: finalerror});
  }
  try{
    const book=await Book.findByIdAndUpdate(req.params.bookId,req.body,{new:true});

   return res.status(200).json({book})
  }
  catch(err){
    return res.status(200).json({err:err.message})
  }
}
)

module.exports=router