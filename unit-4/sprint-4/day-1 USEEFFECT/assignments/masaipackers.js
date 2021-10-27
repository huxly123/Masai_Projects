var count=0;
function ways(arr,k){
    if(k==0){count++}
    if(k<0){return 0}
    for(let i=0;i<arr.length;i++){
        ways(arr,k-arr[i])
    }
    return count
}
function runProgram(input) {
input=input.trim().split("\n");
let dim=input[0].trim().split(" ").map(Number)
let k=+(dim[0])
let size=+(input[1])
let arr=input[1].trim().split(" ").map(Number);
//console.log(arr,k);
let ans=ways(arr,k)
if(ans==0){
    console.log(-1);
}
else{
    console.log(ans);
}
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`39 3
  8 10 2`);
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