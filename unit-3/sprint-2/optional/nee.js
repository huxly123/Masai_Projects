function runProgram(input) {
    input=input.trim().split("\n");
    var size=+(input[0]);
    var arr=input[1].trim().split(" ").map(Number);
    var arr=arr.sort()
    console.log(arr);
 var obj={}
 for(var i=0;i<size;i++){
     if(obj[arr[i]]==null){
         obj[arr[i]]=arr[i]
     }
 }
 //console.log(obj);
  var aa=Object.values(obj)
for(var i=0;i<aa.length;i++){
    for(var j=0;j<aa.length-i-1;j++){
        if(aa[j]>aa[j+1]){
            var temp=aa[j]
            aa[j]=aa[j+1]
            aa[j+1]=temp
        }
    }
}
  console.log(aa);
 if(aa.length<3||aa.length==0){
     console.log("Not Possible");
     console.log("Not Possible");
 }

 else if(aa.length>=3){
     var t=[]
     var ki=[]
    for(var i=0;i<3;i++){
        t.push(aa[i])
    }
    for(var i=aa.length-3;i<=aa.length-1;i++){
        ki.push(aa[i])
    }
    console.log(t.join(" "));
    console.log(ki.join(" "));
 }
 }
    
      
      if (process.env.USERNAME === 'huxly') {
        runProgram(`6
        51 0 0 11 -11 23`);
      } else {
        process.stdin.resume();
        process.stdin.setEncoding("ascii");
        let read = "";
        process.stdin.on("data", function (input) {
          read += input;
        });
        process.stdin.on("end", function () {
          read = read.replace(/\n$/, "");
          read = read.replace(/\n$/, "");
          runProgram(read);
        });
        process.on("SIGINT", function () {
          read = read.replace(/\n$/, "");
          runProgram(read);
          process.exit(0);
        });
      }