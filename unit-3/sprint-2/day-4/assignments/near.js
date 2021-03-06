
function runProgram(input) {
input=input.trim().split("\n");
var size=input[0];
var arr=input[1].trim().split(" ").map(Number);
var ans=[]
var stack=[]
for(var i=0;i<size;i++){
  if(i==0){
    ans.push(-1)
    stack.push(arr[i])
  }
  else{

  for(var j=stack.length-1;j>=0;j--){
    if(arr[i]>stack[j]){
      ans.push(stack[j])
      stack.push(arr[i]);
      break;
    }
    if(arr[i]<=stack[j]){
      
      stack.pop()
    }
  }
  if(stack.length==0){
    ans.push(-1);
    stack.push(arr[i])
  }
}
}
console.log(ans.join(" "));
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`8
  1 1 1 1 1 1 1 1`);
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
