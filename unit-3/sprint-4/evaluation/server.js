const express=require('express');
const app=express();
const mongoose=require('mongoose');
app.use(express.json());
const connect=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/evaluation")
}
// ----------------------USER SCHEMA-------------------
const userSchema=new mongoose.Schema({
    id:{type:Number,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    gender:{type:String,required:true},
    skills:{type:String,required:true},
})

const User=mongoose.model("user",userSchema);

// ------------------JOB SCHEMA----------------------------

const jobSchema=new mongoose.Schema({
    name:{type:String,required:true},
    job_type:{type:String,required:true},
    ratings:{type:Number,required:true},

    notice:{type:Boolean,required:true},
},{
    versionKey:false
})

const Job=mongoose.model("job",jobSchema);

// -------------------COMPANY SCHEMA------------------

const companySchema=new mongoose.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    jobs:[{type:mongoose.Schema.Types.ObjectId,ref:"job",required:true}]
},{
    versionKey:false
})

const Company=mongoose.model("company",companySchema);

//----------------------------       -------------------------------------------------

//------------------------------ Posting and getting basic segment ---------------------------------------
app.post("/users",async (req,res)=>{
    const user=await User.create(req.body);
   return res.status(200).send({user})
})

app.post("/jobs",async (req,res)=>{
    const jobs=await Job.create(req.body);
    return res.status(200).send({jobs})
})

app.post("/companys",async (req,res)=>{
    const companys=await Company.create(req.body);
    return  res.status(200).send({companys})
})

app.get("/users",async (req,res)=>{
    const user=await User.find();
    return res.status(200).send(user)
})

app.get("/jobs",async (req,res)=>{
    const jobs=await Job.find();
    return res.status(200).send(jobs)
})

app.get("/companys",async (req,res)=>{
    const companys=await Company.find().populate("jobs").lean().exec();
    return res.status(200).send(companys)
})

app.patch("/jobs/:id",async (req,res)=>{
    const job=await Job.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(job)
})
// ----------------------------------   ----------------------------------------------------------

//-----------------------------------    Getting from questions --------------------------------------

app.get("/jobs/workathome",async (req,res)=>{
    const jobtype=await Job.find();
    const jobb=[]
  jobtype.forEach( function(job){
      if( job.job_type=="workathome"){
          jobb.push(job)
        
      }
  })
  return res.status(200).send({jobb})
})

app.get("/jobs/notice",async (req,res)=>{
    const noticee=[];
    const notice=await Job.find();
    notice.forEach((note)=>{
        if(note.notice==true){
            noticee.push(note)
        }
    })
    return res.status(200).send({noticee})
})

app.get("/companys/:id",async (req,res)=>{
    const company=await Company.findById(req.params.id).lean().exec();
    return res.status(200).send({company})
})

app.get("/companys/openjob/:id",async (req,res)=>{
    const company=await Company.findById(req.params.id).lean().exec();
    return res.status(200).send({company})
})

app.get("/companys/skills/:city",async (req,res)=>{
    const jobs=await Company.find();
    const city=[];
    jobs.forEach(function(job){
        if(job.address==req.params.city){
            city.push(job)
        }
    })
    return res.status(200).send({city})
})

app.get("/jobs/ratings",async (req,res)=>{
    const job=await Job.find().sort({ratings:1}).lean().exec();
    return res.status(200).send({job})

})

app.listen("3333",async ()=>{
    await connect();
    console.log("listening");
})