const { model } = require("mongoose");


const post=(model)=>async (req,res)=>{
    const item =await model.create(req.body);

    return res.status(200).send({item})
};

const get=(model)=> async (req,res)=>{
    const items=await model.findById(req.params.id)
    return res.status(200).send({items}) 
}

const getOne=(model)=>async (req,res)=>{
    const items=await model.findById(req.params.id)
    return res.status(200).send({items})
}

const deletee=(model)=>async (req,res)=>{
    const items=await model.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({items})
}
const updateOne=(model)=>async (req,res)=>{
    const items=await model.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send({items})
}
module.exports={
    post,
get,
  getOne,
    deletee,
    updateOne
}