const User=require("../models/user.model")

const jwt=require('jsonwebtoken')

const path=require('path');


require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const newToken=(user)=>{
    return jwt.sign({user}, process.env.JWT_SECRETKEY)
}

const register = async (req, res) => {

    let user;
    try {
       
        user = await User.findOne({email: req.body.email})

        if (user) return res.status(400).send({message: "Please check your email and password"});
        
        user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            profile_url:req.file.path,
            roles:req.body.roles
        });
        
        const token = newToken(user)
        
        return res.status(200).send({user, token});

    } catch (err) {
        console.log("err:31",err.message);    }
}

const login = async (req, res) => {
    
    try {
        let user = await User.findOne({email: req.body.email});

        if(! user) return res.status(400).send({message: "User doesnt exist"});
    
        let match = user.checkPassword(req.body.password);
    
        if(! match) return res.status(400).send({message: "password doesnt match"});
    
        const token = newToken(user)
        
        return res.status(200).send({user, token});

    } catch (err) {
       console.log("err:50",err.message);
    }
}


module.exports={register,login,newToken}