
function runProgram(input) {
input=input.trim().split("\n");
var size=+(input[0]);
var arr=input[1].trim().split(" ").map(Number);
var obj={};
var sum=0;
for(var i=0;i<size;i++){
    sum=sum+arr[i];
  


    if(arr[i]==0||sum==0){
        console.log(true); 
    }
   
  var a=Object.values(obj);
  for(var j=0;j<a.length;j++){
      if(sum==a[i]){
          console.log(true);
          var exist=true;
          break;
      }
  }
  if(obj[sum]==null){
    obj[sum]=sum
}
}
if(!exist){
   console.log(false);
}console.log(a);
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`6
  1 4 -4 1 2 -3`);
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
