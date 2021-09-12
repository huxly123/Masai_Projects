function compute(a,b){
    for(var i=0;i<Math.min(a.length,b.length);i++){
      var string1=  a.charCodeAt(i)
        var string2=b.charCodeAt(i)
        var ans=string1-string2
        if(ans!=0){
            return ans;
            break;
        }
    }
}
var a="rancho"
b="chatur"
console.log(compute(a,b));