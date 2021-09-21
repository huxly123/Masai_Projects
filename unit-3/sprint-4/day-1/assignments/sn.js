
function runProgram(input) {
input=input.trim().split("\n");
let size=+(input[0]);
let arr=input[1].trim().split(" ").map(Number);
let stack=[];
let ans=[]
for(let i=0;i<size;i++){
    if(i==0){
        stack.push(arr[i]);
        ans.push(-1)
        continue;
    }
for(let j=stack.length-1;j>=0;j--){
    if(arr[i]<stack[j]){
        stack.pop()
     
    }
    if(arr[i]>stack[j]){
        stack.push(arr[i]);
        ans.push(stack[j]);
        break;
    }
}
if(stack.length==0){
    stack.push(arr[i])
    ans.push(-1)
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
