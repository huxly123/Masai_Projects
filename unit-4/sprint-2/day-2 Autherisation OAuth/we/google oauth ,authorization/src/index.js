const express = require('express');

const passport = require("./configs/passport")

const {register, login} = require("./controllers/auth.controller")
const productController = require("./controllers/product.controller");
const User = require('./models/user.model');

const app = express();

app.use(express.json());
app.use(passport.initialize());

passport.serializeUser(function({user,token},done){
  console.log("user15:",user);
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

app.post("/register", register);
app.post("/login", login);
app.use("/products", productController)

module.exports = app;