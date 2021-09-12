
function runProgram(input) {
var arr=input.trim().split("");
var n=arr.length
var stack=[];
for(var i=0;i<n;i++){
    if(stack.length==0){
        stack.push(arr[i])
    }
    else if(arr[i]==stack[stack.length-1]){
stack.pop();
    }
    else if(arr[i]!=stack[stack.length-1]){
stack.push(arr[i])
    }
    
}
console.log(stack.join(""));
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`aaabccddd`);
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
