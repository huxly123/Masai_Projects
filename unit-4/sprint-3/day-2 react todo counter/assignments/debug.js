let str="let"
function perm(str,result){
    if(str.length==0){
    
        console.log(result);
    }
    for(let i=0;i<str.length;i++){
        let rest=str.substring(0,i)+str.substring(i+1);

        perm(rest,result+str[i])
    }
}
perm(str,'')