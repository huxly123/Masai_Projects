function authorize(permissionRoles){
    return (req,res,next)=>{
        console.log("rr3:",req.user);
        try{
        let allowed=false;
req.user.roles.map(role=>{
    if(permissionRoles.includes(role)){
        allowed=true
    }
})
if(!allowed)
  return  res.status(403).send("roles doesnt match")

    return next()

}catch(err){
    console.log("err:16",err.message);
}
    }
}

module.exports=authorize