function authorize(permissionRoles){
return (req,res,next)=>{
    let allowed=false;
//console.log(req.user);
    req.user.roles.map(role=>{
        if(permissionRoles.includes(role)){
            allowed=true
        }
    })

    if(!allowed) return res.status(403).send("you are not allowed");

    return next();
}
}



module.exports=authorize