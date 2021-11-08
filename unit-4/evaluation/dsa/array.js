
function runProgram(input) {
input=input.trim().split("\n");
let N=+(input[0].trim())
let arr=input[1].trim().split(" ").map(Number);
let A=2;
let B=3;
let sumodd=0;
let sumeven=0;
for(let i=0;i<N;i++){
    if(arr[i]%2==0){
        sumeven+=arr[i]
    }
    if(arr[i]%2==1){
        sumodd+=arr[i]
    }
}
let ans=(A*sumeven)+(B*sumodd);
console.log(ans);
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`5
  1 2 3 4 5`);
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


