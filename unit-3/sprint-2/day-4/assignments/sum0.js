
function runProgram(input) {
input=input.trim().split("\n");
var size=+(input[0]);
var arr=input[1].trim().split(" ").map(Number);
var hash=[];
var sum=0
var exist=false
for(var i=0;i<size;i++){
sum=sum+arr[i];
if(arr[i]==0||sum==0){
    console.log(true);
    var exist=true
    break;
}
console.log(hash);
for(var j=0;j<hash.length-1;j++){
    if(sum==hash[j]){
        console.log(true);
        var exist=true
        break;
    }
 
}
if(!exist){
    hash.push(sum)
}
else{
    break
}
}
if(!exist){
    console.log(false);
}
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`8
  3 3 1 4 3 4 1 -5`);
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
