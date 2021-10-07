function Cop(a,b){
    for(var i=0;i<Math.min(a.length,b.length);i++){
      if(a[i]!=b[i]){
        return a[i]-b[i];
        break;
      }
    }
    }
    a="rancho"
    b="chatur"
    //console.log(Math.min(a.length,b.length))
    console.log(cop(a,b));