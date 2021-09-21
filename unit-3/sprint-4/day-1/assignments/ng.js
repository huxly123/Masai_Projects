
function runProgram(input) {
input=input.trim().split("\n");
let cases=+(input[0]);
let line=1
for(let p=0;p<cases;p++){
let size=+(input[line++]);
let arr=input[line++].trim().split(" ").map(Number);
console.log(arr);
let stack=[];

for(let i=size-1;i>=0;i--){
    if(i==size-1){
stack.push(arr[i]);
arr[i]=-1
    }
    else{
        for(let j=stack.length-1;j>=0;j--){
            if(arr[i]>stack[j]){
                stack.pop();
                
            }
            if(arr[i]<stack[j]){
                stack.push(arr[i]);
                arr[i]=stack[j];
                break;
            }
        }
        
    }
    if(stack.length==0){
        stack,push(arr[i])  
         arr[i]=-1;
         
    }
}
console.log(arr.join(" "));
}


}
if (process.env.USERNAME === 'huxly') {
  runProgram(`1
  4
  1 3 2 4
  3
  3 2 5`);
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
