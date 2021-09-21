
function runProgram(input) {
input=input.trim().split("\n");
let cases=+(input[0])
let line=1
for(let p=0;p<cases;p++){
    let size=+(input[line++]);
    let arr=input[line++].trim().split(" ").map(Number);
  let sum=0
   
    for(let i=0;i<size-1;i++){
        if(arr[i+1]>arr[i]){
           
            sum=sum+arr[i]
        }
        
}

console.log(sum);
}
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`1
  6
  6 10 4 8 3 7
 `);
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