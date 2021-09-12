
function runProgram(input) {
input=input.trim().split("\n");
var size=input[0];
var arr=input[1].trim().split(" ").map(Number);
var ans=[]
var stack=[]
for(var i=0;i<size;i++){
    var exist=true
    while(exist==true){
        exist=true
if(stack.length==0){
    stack.push(arr[i])
    ans.push(-1);
    exist=false
    break;
}else{
if(arr[i]>stack[stack.length-1]){
    ans.push(stack[stack.length-1]);
stack.push(arr[i]);
exist=false
break;
}
if(arr[i]<stack[stack.length-1]){
stack.pop()
}
}
    }


}
console.log(ans.join(" "));
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`8
  39 27 11 4 24 32 32 1`);
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
