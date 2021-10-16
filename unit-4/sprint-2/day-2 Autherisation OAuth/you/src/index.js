const express=require('express');

const passport=require("./configs/passport")

const app=express();

const {register,login}=require("./controllers/auth.controller")

app.use(express.json());



app.post('/register',register)

app.post('/login',login)

const productController=require("./controllers/product.controller");

app.use("/products",productController)

app.use(passport.initialize());

passport.serializeUser(function({user,token},done){
  console.log("user24:",user);
    done(null,{user,token})
})

passport.deserializeUser(function(user,done){
  done(err,user)
})

app.get("/auth/google/failure",(req,res)=>{
  return res.status(400).send("something went wrong")
})

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        failureRedirect: '/auth/google/failure'
}), function(req, res) {
  
   const {user,token}=req.user

   return res.json({user,token})
});


module.exports=app