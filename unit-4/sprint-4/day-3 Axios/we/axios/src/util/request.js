import axios from "axios";

export const todoos=axios.create({
    baseURL:"http://localhost:3001",
    headers:{
        authentication:"token11335453"
    }
})

todoos.interceptors.request.use((config)=>{
    console.log("inside interceptor",config);
if(config.baseURL.startsWith("https://")){
    throw new Error ("only HTTPS allowed")
}
return config
},function (){
    console.log("error in interceptor");
})

export const users=axios.create({
    baseURL:"http://localhost:3001",
    headers:{
        authentication:"tokreverf43r4432"
    }
})